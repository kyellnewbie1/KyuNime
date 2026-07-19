const CONFIG = {
    API_BASE: "https://api-nanas.my.id/api/nonton/samehadaku",
    
    // TEMPAT GANTI BACKGROUND LEWAT CODINGAN (Masukkan URL Gambar di sini)
    // Jika dikosongkan "", website akan otomatis menggunakan warna dark bawaan yang elegan.
    BG_URL: "https://files.catbox.moe/rijuxb.jpg" 
};

// Fungsi otomatis untuk memasang background ke seluruh halaman website
function applyGlobalBackground() {
    if (CONFIG.BG_URL && CONFIG.BG_URL.trim() !== "") {
        const style = document.createElement('style');
        style.innerHTML = `
            body {
                background: linear-gradient(to bottom, rgba(11, 15, 25, 0.85), rgba(11, 15, 25, 0.98)), url('${CONFIG.BG_URL}') no-repeat center center fixed !important;
                background-size: cover !important;
            }
        `;
        document.head.appendChild(style);
    }
}
// Jalankan otomatis saat file config dimuat
document.addEventListener("DOMContentLoaded", applyGlobalBackground);
