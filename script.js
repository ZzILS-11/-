document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

$(document).ready(function() {
    $("#toggleProjects").click(function() {
        $(".projects-grid").slideToggle();
    });

    $(".project-card").hover(
        function() { $(this).css("box-shadow", "0 0 15px rgba(0,0,0,0.3)"); },
        function() { $(this).css("box-shadow", "0 0 5px rgba(0,0,0,0.1)"); }
    );
});