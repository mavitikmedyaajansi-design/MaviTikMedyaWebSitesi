/**
 * VİDEO LİSTESİ
 * =====================================
 * Yeni video eklemek için aşağıdaki listeye yeni bir obje ekleyin.
 * 
 * Örnek:
 * {
 *     title: "Video Başlığı",
 *     description: "Video açıklaması",
 *     src: "videos/dosya_adi.mp4",       ← videos klasörüne koyduğunuz dosyanın adı
 *     category: "emlak",                  ← emlak | mekan | urun | qrmenu | website
 *     date: "2026-10-28",                ← tarih
 *     duration: "03:45"                  ← süre (opsiyonel)
 * }
 * 
 * KATEGORİLER:
 *   "emlak"    → Emlak Çekimlerimiz
 *   "mekan"    → Mekan Çekimlerimiz
 *   "urun"     → Ürün Çekimleri
 *   "qrmenu"   → QR Menü Sistemlerimiz
 *   "website"  → Web Sitelerimiz
 * =====================================
 */

const VIDEOS = [
    // ─── EMLAK ÇEKİMLERİ ───

    {
        title: "Lüks Villa Tanıtımı - Bodrum",
        description: "Bodrum'da deniz manzaralı lüks villa için hazırlanan profesyonel emlak çekim videosu.",
        src: "videos/villa_bodrum.mp4",
        category: "emlak",
        date: "2026-10-15",
        duration: "02:30"
    },
    {
        title: "Rezidans Projesi - İstanbul",
        description: "İstanbul Maslak'ta yeni rezidans projesinin drone ve iç mekan çekimleri.",
        src: "videos/rezidans_istanbul.mp4",
        category: "emlak",
        date: "2026-09-20",
        duration: "03:15"
    },

    // ─── MEKAN ÇEKİMLERİ ───

    {
        title: "Butik Otel Tanıtımı",
        description: "Alaçatı'da bulunan butik otelin atmosferik tanıtım videosu.",
        src: "videos/butik_otel.mp4",
        category: "mekan",
        date: "2026-08-12",
        duration: "01:45"
    },
    {
        title: "Restoran İç Mekan Çekimi",
        description: "Modern restoran konseptinin iç mekan ve ambiyans çekimi.",
        src: "videos/restoran_mekan.mp4",
        category: "mekan",
        date: "2026-07-28",
        duration: "02:00"
    },

    // ─── ÜRÜN ÇEKİMLERİ ───

    {
        title: "Takı Koleksiyonu Çekimi",
        description: "El yapımı takı koleksiyonu için hazırlanan sinematik ürün tanıtım videosu.",
        src: "videos/taki_koleksiyon.mp4",
        category: "urun",
        date: "2026-10-05",
        duration: "01:20"
    },
    {
        title: "Kozmetik Ürün Tanıtımı",
        description: "Yeni çıkan cilt bakım serisi için profesyonel ürün çekim videosu.",
        src: "videos/kozmetik_urun.mp4",
        category: "urun",
        date: "2026-09-10",
        duration: "00:45"
    },

    // ─── QR MENÜ SİSTEMLERİ ───

    {
        title: "QR Menü Demo - Cafe Konsept",
        description: "Kafe ve restoranlar için geliştirdiğimiz dijital QR menü sisteminin tanıtımı.",
        src: "videos/qrmenu_cafe.mp4",
        category: "qrmenu",
        date: "2026-06-18",
        duration: "01:30"
    },

    // ─── WEB SİTELERİ ───

    {
        title: "E-Ticaret Web Sitesi Tanıtımı",
        description: "Müşterimiz için geliştirdiğimiz modern e-ticaret web sitesinin tanıtım videosu.",
        src: "videos/eticaret_web.mp4",
        category: "website",
        date: "2026-05-22",
        duration: "02:10"
    },
    {
        title: "Kurumsal Web Sitesi Projesi",
        description: "Kurumsal firma için tasarlanan responsive web sitesinin tanıtım ve kullanım videosu.",
        src: "videos/kurumsal_web.mp4",
        category: "website",
        date: "2026-04-15",
        duration: "01:55"
    }
];

// Kategori isimleri (Türkçe karşılıkları)
const CATEGORY_LABELS = {
    "emlak": "Emlak Çekimleri",
    "mekan": "Mekan Çekimleri",
    "urun": "Ürün Çekimleri",
    "qrmenu": "QR Menü Sistemleri",
    "website": "Web Siteleri"
};
