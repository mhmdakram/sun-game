<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

$(document).ready(function () {
    $("#aniLeft").click(function () {
        $("#sun").addClass("aniLeft") && $("#light").addClass("aniLeftLight") && $("#sun").removeClass("aniRight") && $("#light").removeClass("aniRightLight");
    });

    $("#aniRight").click(function () {
        $("#light").removeClass("aniLeftLight") && $("#sun").removeClass("aniLeft") && $("#light").addClass("aniRightLight") && $("#sun").addClass("aniRight");
    });
});