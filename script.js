const humburger = document.querySelector('.humburger')

humburger.onclick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

