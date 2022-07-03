// Displays menu and triggers burger animation
navicon.addEventListener('click', () =>{
    if(navicon.classList.contains('open') && !navMenu.classList.contains('hidden')){
        navicon.classList.toggle('open');
        navMenu.classList.add('hidden');
    }
    else{
        navicon.classList.toggle('open');
        navMenu.classList.remove('hidden');
    }
} )