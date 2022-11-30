
burger = document.querySelector('.burger')


burger.addEventListener('click', () => {
    navBar = document.querySelector('.navbar')
    NavList = document.querySelector('.nav-list')
    rightnav = document.querySelector('.rightnav')

    navBar.classList.toggle('h-nav-resp');
    NavList.classList.toggle('v-class-resp');
    rightnav.classlist.toggle('v-class-resp');
});