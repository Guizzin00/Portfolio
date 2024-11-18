     // codigo 1

var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        
        document.querySelector('.navbar').style.top = "-80px";
    } else {
        
        document.querySelector('.navbar').style.top = "0";
    }
    lastScrollTop = currentScroll;

    // codigo 2
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav-menu a');

    sections.forEach(section => {
        var sectionTop = section.offsetTop - 50;
        var sectionHeight = section.clientHeight;
        var id = section.getAttribute('id');
        var navLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
});
 
// codigo 3

document.querySelectorAll('.skill-title').forEach(title => {
    title.addEventListener('click', function() {
        const description = this.nextElementSibling;
        if (description.style.display === 'block') {
            description.style.display = 'none';
        } else {
            document.querySelectorAll('.skill-description').forEach(desc => {
                desc.style.display = 'none';
            });
            description.style.display = 'block';
        }
    });
});