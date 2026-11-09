// ===== APP.JS - Mavi Tik Medya Video Galeri =====

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const emptyState = document.getElementById('empty-state');
    const searchInput = document.getElementById('search-input');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalVideo = document.getElementById('modal-video');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalCategory = document.getElementById('modal-category');
    const modalDate = document.getElementById('modal-date');
    const modalClose = document.getElementById('modal-close');
    const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
    const totalCount = document.getElementById('total-count');
    const categoryCount = document.getElementById('category-count');
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbarMenu = document.getElementById('navbar-menu');

    let currentFilter = 'all';
    let currentSearch = '';

    // ===== Dynamic Storage Sync =====
    function getActiveVideos() {
        try {
            const saved = localStorage.getItem('mavitik_custom_refs');
            if (saved) {
                const refs = JSON.parse(saved);
                const customVideos = [];
                for (const [id, r] of Object.entries(refs)) {
                    if (r.type === 'video') {
                        customVideos.push({
                            title: r.title,
                            description: r.desc || r.client || '',
                            src: r.videoSrc && r.videoSrc.startsWith('videolar/') ? '../' + r.videoSrc : (r.videoSrc || ''),
                            category: r.category || 'emlak',
                            date: '2026-10-31',
                            duration: '4K UHD'
                        });
                    }
                }
                if (customVideos.length > 0) return customVideos;
            }
        } catch(e) {}
        return VIDEOS;
    }

    // ===== Initialize =====
    function init() {
        updateStats();
        renderVideos();
        setupEventListeners();
    }

    // ===== Update Stats =====
    function updateStats() {
        const allVids = getActiveVideos();
        const total = allVids.length;
        const categories = new Set(allVids.map(v => v.category));
        animateNumber(totalCount, total);
        animateNumber(categoryCount, categories.size);
    }

    function animateNumber(element, target) {
        let current = 0;
        const step = Math.ceil(target / 20);
        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            element.textContent = current;
        }, 40);
    }

    // ===== Render Videos =====
    function renderVideos() {
        const allVids = getActiveVideos();
        const filtered = allVids.filter(video => {
            const matchesFilter = currentFilter === 'all' || video.category === currentFilter;
            const matchesSearch = currentSearch === '' ||
                video.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                video.description.toLowerCase().includes(currentSearch.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        galleryGrid.innerHTML = '';

        if (filtered.length === 0) {
            emptyState.style.display = 'block';
            if (currentSearch || currentFilter !== 'all') {
                emptyState.querySelector('h2').textContent = 'Sonuç bulunamadı';
                emptyState.querySelector('p').textContent = 'Farklı bir arama veya filtre deneyin.';
            } else {
                emptyState.querySelector('h2').textContent = 'Henüz video eklenmemiş';
                emptyState.querySelector('p').innerHTML = '<code>videos.js</code> dosyasını düzenleyerek videolarınızı ekleyin.';
            }
            return;
        }

        emptyState.style.display = 'none';

        filtered.forEach((video, index) => {
            const card = createVideoCard(video, index);
            galleryGrid.appendChild(card);
        });
    }

    // ===== Create Video Card =====
    function createVideoCard(video, index) {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.style.animationDelay = `${index * 0.06}s`;

        const categoryLabel = CATEGORY_LABELS[video.category] || video.category;
        const formattedDate = formatDate(video.date);

        card.innerHTML = `
            <div class="card-thumbnail">
                <video src="${video.src}" preload="metadata" muted></video>
                <div class="card-play-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </div>
                ${video.duration ? `<span class="card-duration">${video.duration}</span>` : ''}
                <span class="card-category-badge">${categoryLabel}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${video.title}</h3>
                <p class="card-description">${video.description}</p>
                <div class="card-meta">
                    <span class="card-date">${formattedDate}</span>
                    <span class="card-tag">${categoryLabel}</span>
                </div>
            </div>
        `;

        // Hover video preview
        const thumbVideo = card.querySelector('.card-thumbnail video');
        card.addEventListener('mouseenter', () => {
            thumbVideo.currentTime = 0;
            thumbVideo.play().catch(() => {});
        });
        card.addEventListener('mouseleave', () => {
            thumbVideo.pause();
            thumbVideo.currentTime = 0;
        });

        // Click to open modal
        card.addEventListener('click', () => openModal(video));

        return card;
    }

    // ===== Modal =====
    function openModal(video) {
        const categoryLabel = CATEGORY_LABELS[video.category] || video.category;

        modalVideo.src = video.src;
        modalTitle.textContent = video.title;
        modalDescription.textContent = video.description;
        modalCategory.textContent = categoryLabel;
        modalDate.textContent = formatDate(video.date);

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        modalVideo.onerror = function() {
            console.warn('Galeri video oynatılamadı:', video.src);
        };

        setTimeout(() => {
            const p = modalVideo.play();
            if (p !== undefined) {
                p.catch(e => {
                    console.log('Galeri autoplay sessize alınıyor:', e);
                    modalVideo.muted = true;
                    modalVideo.play().catch(() => {});
                });
            }
        }, 400);
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        modalVideo.pause();
        modalVideo.src = '';
    }

    // ===== Event Listeners =====
    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                renderVideos();
            });
        });

        // Search
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderVideos();
        });

        // Modal close
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenuBtn.classList.toggle('open');
                navbarMenu.classList.toggle('open');
            });

            // Close mobile menu on link click
            navbarMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenuBtn.classList.remove('open');
                    navbarMenu.classList.remove('open');
                });
            });
        }
    }

    // ===== Helpers =====
    function formatDate(dateStr) {
        if (!dateStr) return '';
        const months = [
            'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
            'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
        ];
        const parts = dateStr.split('-');
        const day = parseInt(parts[2], 10);
        const month = months[parseInt(parts[1], 10) - 1];
        const year = parts[0];
        return `${day} ${month} ${year}`;
    }

    // ===== Start =====
    init();
});
