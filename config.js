const CONFIG = {
    // FIX: Menggunakan API Base dari api-nanas.my.id agar datanya tembus
    API_BASE: "https://api-nanas.my.id/api/nonton/samehadaku",

    // BACKGROUND PREMIUM WEBSITE
    BG_URL: "https://files.catbox.moe/rijuxb.jpg",

    // KREDENSIAL DATABASE SUPABASE
    SUPABASE_URL: "https://rpgustndncsmxkfyfrkg.supabase.co",
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwZ3VzdG5kbmNzbXhrZnlmcmtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0MzM4NjgsImV4cCI6MjEwMDAwOTg2OH0.1rWms-Ms4hcOB6L1HH6mEva6lrdDo2JGdR3KMYtTH4A"
};

// Buat objek CONFIG dapat diakses secara global
window.CONFIG = CONFIG;

// Fungsi otomatis untuk memasang background website secara instan
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

applyGlobalBackground();
