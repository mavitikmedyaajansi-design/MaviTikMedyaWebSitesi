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
 *
 * NOT: Video dosyaları "referans videolar/videos/" klasörüne taşınmalıdır.
 * Şu an videolar "../videolar/" dizinindedir; gerekirse yolu güncelleyin.
 * =====================================
 */

const VIDEOS = [

    // ─── İÇERİK ÇEKİMLERİ (SOSYAL MEDYA / REELS) ───

    {
        title: "İstedikleri Şeyler Farklı Ama Mantık Aynı",
        description: "Sosyal medya ve reels formatında özgün içerik çekimi. Viral potansiyelli 9:16 dikey video.",
        src: "../videolar/icerik-cekimi-1.mp4",
        category: "icerik",
        date: "2026-11-09",
        duration: "9:16 Reels"
    },

    // ─── EMLAK ÇEKİMLERİ ───

    {
        title: "Evsan Gayrimenkul • Emlak & Mimari Çekimi",
        description: "Evsan Gayrimenkul için Mavi Tik Medya Ajansı tarafından hazırlanan 4K profesyonel emlak ve mimari tanıtım çekimi.",
        src: "../videolar/emlak-cekimi.mp4",
        category: "emlak",
        date: "2026-10-31",
        duration: "4K UHD"
    },
    {
        title: "Evsan Gayrimenkul • Lüks Konut & Rezidans Çekimi",
        description: "Evsan Gayrimenkul portföyü için hazırlanan sinematik rezidans ve lüks yaşam tanıtım filmi.",
        src: "../videolar/emlak-cekimi-2.mp4",
        category: "emlak",
        date: "2026-10-31",
        duration: "4K UHD"
    },

    // ─── ÜRÜN ÇEKİMLERİ ───

    {
        title: "Ürün Çekimi",
        description: "Sinematik ürün tanıtım ve reklam çekimi.",
        src: "../videolar/urun-cekimi.MOV",
        category: "urun",
        date: "2026-10-31",
        duration: ""
    },

    // ─── MEKAN / ETKİNLİK ÇEKİMLERİ ───

    {
        title: "Mekan / Etkinlik Çekimi",
        description: "Mavi Tik Medya Ajansı mekan ve etkinlik tanıtım çekimi.",
        src: "../videolar/WhatsApp-Video-2026-10-31-at-18.51.30.mp4",
        category: "mekan",
        date: "2026-10-31",
        duration: ""
    }

    /*
     * ─── YENİ VİDEO EKLEMEK İÇİN BURAYA KOPYALAYIN ───
     * ,{
     *     title: "Video Adı",
     *     description: "Açıklama",
     *     src: "../videolar/dosya.mp4",
     *     category: "emlak",   // emlak | mekan | urun | qrmenu | website
     *     date: "2026-11-01",
     *     duration: "02:15"
     * }
     */
];

// Kategori isimleri (Türkçe karşılıkları)
const CATEGORY_LABELS = {
    "emlak":   "Emlak Çekimleri",
    "mekan":   "Mekan Çekimleri",
    "urun":    "Ürün Çekimleri",
    "icerik":  "İçerik Çekimleri",
    "qrmenu":  "QR Menü Sistemleri",
    "website": "Web Siteleri"
};
