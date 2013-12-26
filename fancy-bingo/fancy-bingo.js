// code used by for client and server

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
        path: '/game',
        load: function() {
            var inRoom = Session.get("room");
            if ( inRoom !== 'yes' ) { 
                this.redirect('home');
            }
        }
    });  
});

// model 
Players = new Meteor.Collection("players");
