$(".mode-select").click(function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).find("i").removeClass("fa-sun").addClass("fa-moon");
        $("body").removeClass("dark");
    } else {
        $(this).addClass("active");
        $(this).find("i").removeClass("fa-moon").addClass("fa-sun");
        $("body").addClass("dark");
    }
});