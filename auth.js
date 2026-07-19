// Gunakan nama variabel supabaseClient agar tidak tabrakan dengan CDN
const supabaseClient = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);

async function checkAuthStatus() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    const navContainer = document.querySelector('nav .max-w-7xl');
    
    let userArea = document.getElementById('user-nav-area');
    if(!userArea) {
        userArea = document.createElement('div');
        userArea.id = 'user-nav-area';
        userArea.className = 'flex items-center gap-3 mt-2 sm:mt-0';
        navContainer.appendChild(userArea);
    }

    if (session) {
        const { data: profile } = await supabaseClient.from('profiles').select('*').eq('id', session.user.id).single();
        
        if(profile) {
            userArea.innerHTML = `
                <a href="profil.html" class="flex items-center gap-2 hover:bg-white/10 p-1.5 rounded-xl transition border border-transparent hover:border-white/20">
                    <img src="${profile.avatar_url}" class="w-9 h-9 rounded-full object-cover border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" alt="Avatar">
                    <span class="text-sm font-bold text-white hidden sm:block">${profile.full_name}</span>
                </a>
            `;
        }
    } else {
        userArea.innerHTML = `
            <a href="auth.html" class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold py-2 px-5 rounded-xl shadow-lg shadow-purple-500/30 transform hover:-translate-y-0.5 transition">
                <i class="fa-solid fa-user mr-2"></i>Login
            </a>
        `;
    }
}

document.addEventListener('DOMContentLoaded', checkAuthStatus);
