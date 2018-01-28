/* jshint esversion:6 */
/* global $ */


$(function () {                                 //document.ready

    const menuss = $("#menulinks");
    const hamicon = $(".fa-3x");
    const main = $("#firstpage");
    const lastp = $("#secondpage");

    menuss.on("click", ".fa-3x", _ => {         //Specifically listens
        $("#menulinks ul").toggleClass("hide"); //4 the icon clicks
    });


    main.on("click", "#arrow", _ => {
        $("html, body").animate({
            scrollTop: lastp.offset().top
        }, 1600);
    });

    lastp.on("click", "#up", _ => {
        $("html, body").animate({
            scrollTop: main.offset().top
        }, 1600);
    });
});
