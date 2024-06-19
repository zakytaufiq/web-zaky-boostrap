/* Menampilkan Menu Navbar */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*Menghilangkan Menu Navbar*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Ketika klik pada setiap nav__link, makan akan menghilangkan kelas show-menu
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi glightbox
    const lightbox = GLightbox({
        selector: '.glightbox'
    });

    // Inisialisasi isotope
    const iso = new Isotope('.isotope-container', {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry'
    });

    // Filter items on button click
    const filtersElem = document.querySelector('.isotope-filters');
    filtersElem.addEventListener('click', function(event) {
        if (!matchesSelector(event.target, 'li')) {
            return;
        }
        const filterValue = event.target.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });

        // Update active class
        filtersElem.querySelector('.filter-active').classList.remove('filter-active');
        event.target.classList.add('filter-active');
    });
});
