

$(document).ready(function () {
    $("#aniLeft").click(function () {
        $("#sun").addClass("aniLeft") && $("#light").addClass("aniLeftLight") && $("#sun").removeClass("aniRight") && $("#light").removeClass("aniRightLight");
    });

    $("#aniRight").click(function () {
        $("#light").removeClass("aniLeftLight") && $("#sun").removeClass("aniLeft") && $("#light").addClass("aniRightLight") && $("#sun").addClass("aniRight");
    });
});


