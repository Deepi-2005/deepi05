document.addEventListener('DOMContentLoaded', function() {
    var mysong = document.getElementById("mysong");
    var icon = document.getElementById("icon");
    
    icon.onclick = function() {
    if (mysong.paused){
        mysong.play();
        icon.src = "image/pause1.png";
    } else {
        mysong.pause();
        icon.src = "image/play1.png";
    }
};
// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
    