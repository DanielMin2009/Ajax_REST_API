$(document).ready(function() {
    $("#getJokeBtn").click(function() {
        $.get("http://api.icndb.com/jokes/random", function(data) {
            $("#answerJoke").html(data.value.joke);
        });
    });
});