// template
Template.home.events({
    'click #login_button' : function() {
        var error_elm = document.getElementById("error_message");

        var player_name = document.getElementsByName("player_name")[0].value;
        var players = Players.find({ name: player_name });
        if (players.count() == 0) {
            // ok. you can use this name. go to game page.
            var new_player = Players.insert({name: player_name});
            Router.go('game');
        } else {
            error_elm.innerText = "Someone already used this name. Please login with another name!"; 
        }
    }
});

Template.game.player_list = function() {
    var players = Players.find();
};
