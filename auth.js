// Membutuhkan CDN Supabase di HTML: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
const supabase = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);

async function checkAuthStatus() {
    const { data: { session } } = await supabase.auth.getSession();
    const navContainer = document.querySelector('nav .max-w-7xl');
    
    // Cari atau buat div untuk area user
    let userArea = document.getElementById('user-nav-area');
    if(!userArea) {
        userArea = document.createElement('div');
        userArea.id = 'user-nav-area';
        userArea.className = 'flex items-center gap-3 mt-2 sm:mt-0';
        navContainer.appendChild(userArea);
    }

    if (session) {
        // Ambil data profil
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
        
        if(profile) {
            userArea.innerHTML = `
                <a href="profil.html" class="flex items-center gap-2 hover:bg-gray-800 p-1.5 rounded-lg transition border border-transparent hover:border-gray-700">
                    <img src="${profile.avatar_url}" class="w-8 h-8 rounded-full object-cover border border-purple-500" alt="Avatar">
                    <span class="text-sm font-bold text-white hidden sm:block">${profile.full_name}</span>
                </a>
            `;
        }
    } else {
        userArea.innerHTML = `
            <a href="auth.html" class="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold py-2 px-4 rounded-full transition shadow-lg shadow-purple-500/30">
                <i class="fa-solid fa-right-to-bracket mr-1"></i> Login
            </a>
        `;
    }
}

// Jalankan pengecekan saat halaman dimuat
document.addEventListener('DOMContentLoaded', checkAuthStatus);
