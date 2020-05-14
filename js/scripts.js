const jokeButton = $('#getJokeBtn ');

jokeButton.click(function () {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.icndb.com/jokes/random',
        success: function (data) {
            $.each(data, function (i, item) { // L'índex s'ha de declarar perquè funcioni
                $("#answerJoke").html(item.joke); 
            });
        },
        error: function () {
            console.log("Sorry, the API is not working correctly.");
        }
    });
})
