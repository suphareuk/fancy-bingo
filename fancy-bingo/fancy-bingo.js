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
        path: '/game' 
    });  
});

// model 
Players = new Meteor.Collection("players");
