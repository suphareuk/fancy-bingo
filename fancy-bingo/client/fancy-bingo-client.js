// routing
Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'home'
    }); 
    this.route('game', {
        path: '/game'
    }); 
});

// template
Template.home.events({
    'click #login_button' : function() {
        var error_elm = document.getElementById("error_message");

        var player_name = document.getElementsByName("player_name")[0].value;
        console.log('name',player_name);
        var players = Players.find({ name: player_name });
        console.log('players',players);
        if (players.count() == 0) {
            // ok. you can use this name. go to game page.
            var new_player = Players.insert({name: player_name});
            Router.go('game');
        } else {
            error_elm.innerText = "Someone already used this name. Please login with another name!"; 
        }
    }
});
