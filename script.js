// Reading Progress Logic
document.querySelector('main').addEventListener('scroll', (e) => {
    const winScroll = e.target.scrollTop;
    const height = e.target.scrollHeight - e.target.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("reading-progress").style.width = scrolled + "%";
});

// Navigation Logic
function navModule(moduleId) {
    // Hide all modules
    document.querySelectorAll('.module-content').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });

    // Show selected module
    const target = document.getElementById(moduleId);
    if(target) {
        target.classList.remove('hidden');
        target.classList.add('active', 'fade-in');
        document.querySelector('main').scrollTo({top: 0, behavior: 'smooth'});
    }

    // Update Nav Buttons styling
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.add('border-transparent');
        const icon = btn.querySelector('i');
        if(icon) {
            icon.classList.add('text-gray-500');
            icon.classList.remove('text-brand-cyan');
        }
    });

    // Find clicked button and style it
    const activeBtn = Array.from(document.querySelectorAll('.nav-item')).find(btn => btn.getAttribute('onclick') === `navModule('${moduleId}')`);
    if(activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.classList.remove('border-transparent');
        const activeIcon = activeBtn.querySelector('i');
        if(activeIcon) {
            activeIcon.classList.remove('text-gray-500');
            activeIcon.classList.add('text-brand-cyan');
        }
    }

    // Mobile menu handling
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if(sidebar && !sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

// Mobile Toggle Logic
document.getElementById('mobile-toggle')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
    document.getElementById('overlay').classList.toggle('hidden');
});

document.getElementById('overlay')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('-translate-x-full');
    document.getElementById('overlay').classList.add('hidden');
});