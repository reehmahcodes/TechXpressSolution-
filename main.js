window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'purple';
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
    }
    else {
        header.style.backgroundColor = 'transparent';
        header.style.position = 'relative';
        header.style.color = 'white';
        header.style.width = 'inherit';
    }
})

// function showSidebar() {
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'block'
// }

// function hideSidebar() {
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'none'
// }

var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0"
}

function hideMenu() {
    navLinks.style.right = "-200px"
}


