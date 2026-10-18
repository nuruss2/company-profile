const headerRoot = document.getElementById('site-header');
const footerRoot = document.getElementById('site-footer');

const navItems = [
  { label: 'Beranda', href: 'index.html' },
  { label: 'Tentang Kami', href: 'tentang.html' },
  { label: 'Produk', href: 'produk.html' },
  { label: 'Portofolio', href: 'portofolio.html' },
  { label: 'Kontak', href: 'kontak.html' }
];

const currentPage = location.pathname.split('/').pop() || 'index.html';

if (headerRoot) {
  headerRoot.innerHTML = `
    <header class="site-header">
      <div class="nav-wrap">
        <a class="brand" href="index.html" aria-label="Nexora, beranda">
          <span class="brand-mark">N</span>
          <span>NEXORA<small>BETTER PRODUCT, BRIGHTER FUTURE</small></span>
        </a>
        <button class="menu-toggle" id="menu-toggle" aria-label="Buka menu navigasi" aria-expanded="false">☰</button>
        <nav class="nav-links" id="nav-links" aria-label="Navigasi utama">
          ${navItems.map(item => `<a href="${item.href}" class="${currentPage === item.href ? 'active' : ''}">${item.label}</a>`).join('')}
          <a class="nav-cta" href="kontak.html">Hubungi Kami ↗</a>
        </nav>
      </div>
    </header>`;

  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}

if (footerRoot) {
  footerRoot.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-about">
            <a class="brand" href="index.html"><span class="brand-mark">N</span><span>NEXORA<small>BETTER PRODUCT, BRIGHTER FUTURE</small></span></a>
            <p>Menghadirkan produk pilihan yang memadukan fungsi, estetika, dan kualitas untuk kehidupan yang lebih baik.</p>
          </div>
          <div class="footer-col"><h4>JELAJAHI</h4><a href="tentang.html">Tentang Kami</a><a href="produk.html">Produk</a><a href="portofolio.html">Portofolio</a></div>
          <div class="footer-col"><h4>HUBUNGI KAMI</h4><p>halo@nexora.example</p><p>+62 812-3456-7890</p><p>Jakarta, Indonesia</p></div>
        </div>
        <div class="footer-bottom"><span>© <span id="year"></span> Nexora. Semua hak dilindungi.</span><span>Dibuat dengan tujuan dan perhatian pada detail.</span></div>
      </div>
    </footer>`;
  document.getElementById('year').textContent = new Date().getFullYear();
}

// Filter and search on the products page
const catalog = document.getElementById('catalog');
if (catalog) {
  const cards = [...catalog.querySelectorAll('.catalog-card')];
  const searchInput = document.getElementById('product-search');
  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  const emptyState = document.getElementById('empty-state');
  let activeFilter = 'all';

  function updateProducts() {
    const query = (searchInput.value || '').trim().toLowerCase();
    let visibleCount = 0;
    cards.forEach(card => {
      const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
      const matchesSearch = card.dataset.name.includes(query);
      const visible = matchesCategory && matchesSearch;
      card.hidden = !visible;
      if (visible) visibleCount++;
    });
    emptyState.hidden = visibleCount > 0;
  }

  filterButtons.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    updateProducts();
  }));
  searchInput.addEventListener('input', updateProducts);

  const modal = document.getElementById('product-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCopy = document.getElementById('modal-copy');
  const productDescriptions = {
    'Smart Bottle': 'Botol minum untuk membantu rutinitas hidrasi harian. Hubungi tim kami untuk mengetahui pilihan warna, spesifikasi, dan ketersediaan.',
    'Air Purifier': 'Solusi untuk membantu menciptakan ruang yang lebih nyaman. Hubungi tim kami untuk informasi spesifikasi dan rekomendasi penggunaan.',
    'Portable Blender': 'Perangkat praktis untuk menyiapkan minuman favorit saat beraktivitas. Hubungi tim kami untuk informasi produk.',
    'Smart Lamp': 'Pencahayaan yang dapat disesuaikan untuk mendukung suasana ruang. Hubungi tim kami untuk mengetahui fitur dan kompatibilitas.',
    'Wireless Earbuds': 'Audio nirkabel untuk mendukung aktivitas harian. Hubungi tim kami untuk informasi detail produk.',
    'Smart Watch': 'Perangkat untuk membantu memantau aktivitas harian dalam satu tampilan. Hubungi tim kami untuk spesifikasi.'
  };
  catalog.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
    const name = button.dataset.product;
    modalTitle.textContent = name;
    modalCopy.textContent = productDescriptions[name] || 'Hubungi tim kami untuk informasi produk.';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }));
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  modal.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
}

// Contact form demo: validates fields, but does not send to a server.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const note = document.getElementById('form-note');
    note.textContent = 'Terima kasih! Formulir demo berhasil divalidasi, tetapi pesan belum dikirim. Hubungkan form ke backend atau layanan formulir untuk menerima pesan sungguhan.';
    note.style.color = '#8a6423';
    contactForm.reset();
  });
}
