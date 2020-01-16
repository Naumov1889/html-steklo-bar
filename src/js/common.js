(function () {

    document.querySelector(".burger").addEventListener("click", function () {
        document.querySelector(".overlay").classList.add("overlay_active");
        document.querySelector(".nav").classList.add("nav_active");
        document.querySelector(".popbox_main_content").classList.add("popbox_main_content_active");
    });

    document.querySelector(".overlay").addEventListener("click", function () {
        document.querySelector(".overlay").classList.remove("overlay_active");
        document.querySelector(".popbox_main_content").classList.remove("popbox_main_content_active");
        document.querySelector(".nav").classList.remove("nav_active");
    });

    document.querySelectorAll(".nav__link").forEach(nav__link => {
        nav__link.addEventListener("click", function () {
            document.querySelector(".overlay").classList.remove("overlay_active");
            document.querySelector(".popbox_main_content").classList.remove("popbox_main_content_active");
            document.querySelector(".nav").classList.remove("nav_active");
        });
    });


    let popbox = new Popbox();
    popbox.open("popbox-success");
}());