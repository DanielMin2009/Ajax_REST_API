const button = $('#getJokeBtn ');

button.click(function () {
    $.ajax({
        dataType: 'json',
        type: "GET",
        url: 'https://api.icndb.com/jokes/random',
        success: function (result) {
            $.each(result, function (index, element) {
                $("#answerJoke").html(element.joke); // S'assigna el text que es vol.
            });
        },
        error: function () {
            console.log("Sorry, The API is not working correctly");
        }
    });
})
