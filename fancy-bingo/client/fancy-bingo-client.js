// template
Template.home.events({
    'click #login_button' : function() {
        var error_elm = document.getElementById("error_message");

        var player_name = document.getElementsByName("player_name")[0].value;
        var players = Players.find({ name: player_name });
        if (players.count() == 0) {
            // ok. you can use this name. go to game page.
            var new_player = Players.insert({name: player_name});
            Session.set('room','yes');
            Router.go('game');
        } else {
            error_elm.innerText = "Someone already used this name. Please login with another name!"; 
        }
    }
});

Template.game.player_list = function() {
    return Players.find({});
};

Template.game.rendered = function() {
    
    $( ".column_B .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['B'][index]); });
    $( ".column_I .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['I'][index]); });
    $( ".column_N .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['N'][index]); });
    $( ".column_G .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['G'][index]); });
    $( ".column_O .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['O'][index]); });

};

Template.game.events({
    'click #new_card' : function() { 
        myBingo.newCard();
        $( ".column_B .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['B'][index]); });
        $( ".column_I .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['I'][index]); });
        $( ".column_N .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['N'][index]); });
        $( ".column_G .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['G'][index]); });
        $( ".column_O .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['O'][index]); });
    }
});
    