// template home
Template.home.events({
    'click #login_button' : function() {
        var error_elm = document.getElementById("error_message");

        var player_name = document.getElementsByName("player_name")[0].value;
        var players = Players.find({ name: player_name });
        if (players.count() == 0) {
            // ok. you can use this name. go to game page.
            var new_player_id = Players.insert({name: player_name});
            Session.set('room','yes');
            Session.set('userid',new_player_id);
            Session.set('username',player_name);
            Router.go('game');
        } else {
            error_elm.innerText = "Someone already used this name. Please login with another name!"; 
        }
    }
});

// template game
Template.game.username = function() {
    return Session.get('username');
};

Template.game.isNotMe = function(name) {
    return name != Session.get('username');
};

Template.game.player_list = function() {
    return Players.find({});
};

Template.game.rendered = function() {
    
    $( ".column_B .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['B'][index]); });
    $( ".column_I .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['I'][index]); });
    $( ".column_N .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['N'][index]); });
    $( ".column_G .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['G'][index]); });
    $( ".column_O .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['O'][index]); });

    // player style control 
    var player = $(".player-list li");
    if ( player.length > 7 ) {
        player.addClass('smaller');
    }
};

Template.game.events({
    'click button.logout' : function() {
        var userid = Session.get('userid')
        Players.remove(userid);
        Session.set('room',null);
        Session.set('username',null);
        Session.set('userid',null);
        Router.go('home');
    },
    'click #new_card' : function() { 
        myBingo.newCard();
        $( ".column_B .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['B'][index]); });
        $( ".column_I .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['I'][index]); });
        $( ".column_N .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['N'][index]); });
        $( ".column_G .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['G'][index]); });
        $( ".column_O .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['O'][index]); });
    }, 
    'click #roll' : function() { 

        $("#new_card").attr('disabled', true);
        
        if (!myBingo.player.win) {
            
            myBingo.rollNumber();

            var numbersCalledLen = myBingo.dealer.numbersCalled.length - 1,
                numbersCalled    = myBingo.dealer.numbersCalled[numbersCalledLen];

            $('.history-cell li').each(function(index) {
                if (index + 1 === numbersCalled ) {
                    var li_element = $('.history-cell li')[index];
                    $(li_element).addClass('active');        
                };
            });

            $('#bingo_card .cell').each(function(index) {
                if($(this).text() == numbersCalled) {
                    $(this).addClass('active');
                }
            });
        
            shootBall(numbersCalled);

        } else if (myBingo.player.win) {
            $('#roll').attr('disabled', true).text('Bingo !!!');
        }
        
    }
});

