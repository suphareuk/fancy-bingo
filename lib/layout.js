$(document).ready(function() {

    $("#mock_new_card").on( "click", function(event) {

    	console.dir($("#bingo_card"));

		var children = $('#bingo_card').children();
		for(var i = 0;i < children.length;i++){
			console.log(i);
			children.eq(i).css("background-color", "red" );
			console.log(children[i].childNodes[0].nodeValue);
		}

    });

});