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

var gameControl = {

    'endGame' : function() {
        if (myBingo.player.win) {
            $('#roll').attr('disabled', true).text('Bingo !!!');   
            $('#bingo').fadeIn(200);
        }
    },

    'shootBall' : function(number) {
        //remove previous ball
        $(".result-ball").remove();
        var machineBox = $(".dealer_zone");
        var resultBall = '<span class="result-ball animate">'+
        '<span class="ball"></span>'+
        '<span class="ball-shadow"></span>'+
        '<b class="number"> '+ number +' </b>'+
        '</span>';
        machineBox.append( resultBall );
    },

    'renderCard' : function() {
        $( ".column_B .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['B'][index]); });
        $( ".column_I .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['I'][index]); });
        $( ".column_N .cell" ).each(function( index ) { 
            if (index !== 2) {
                $(this).text(myBingo.player.bingoCard['N'][index]); 
            }
        });
        $( ".column_G .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['G'][index]); });
        $( ".column_O .cell" ).each(function( index ) { $(this).text(myBingo.player.bingoCard['O'][index]); });
    }

};

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

    $('#bingo').hide();
    gameControl.renderCard();
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
        $('#bingo').hide();
        Router.go('home');
    },
    'click #new_card' : function() { 
        myBingo.newCard();
        gameControl.renderCard();
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
            
                gameControl.shootBall(numbersCalled);
                gameControl.endGame();
            } 

    }

    /*'click #auto_roll' : function() { 

        var autoRoll = setInterval( function(){ 

                function endGame() {
                    if (myBingo.player.win) {
                        $('#roll').attr('disabled', true).text('Bingo !!!');   
                        $('body').append('<div id="bingo"></div>');
                    }
                }

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
                    endGame();
                } 

            }, 2000 );

        $("#new_card").attr('disabled', true);
        
        if ($("#auto_roll").text() === 'Stop') {
            //stopAutoRoll();
            //autoRoll = '';
            clearInterval(autoRoll);
            $("#auto_roll").text('Auto Roll');  
        } else {
            $("#auto_roll").text('Stop');  
        }
        
    }*/

});

