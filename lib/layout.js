/*console.log(columnB.slice(0, 5));
console.log(columnI.slice(0, 5));
console.log(columnN.slice(0, 5));
console.log(columnG.slice(0, 5));
console.log(columnO.slice(0, 5));*/

/*var column = { B : columnB,
					I : columnI,
					N : columnN,
					G : columnG,
					O : columnO }



column.watch("B", function (id, oldval, newval) {
    console.log( "B" + id + " changed from " + oldval + " to " + newval );
    return newval;
});

console.log(document.getElementById('bingo_card'));*/


$(document).ready(function() {

    $("#mock_new_card").on( "click", function(event) {

    	console.dir($("#bingo_card"));

		var children = $('#bingo_card').children();
		for(var i = 0;i < children.length;i++){
			console.log(i);
			children.eq(i).css("background-color", "red" );
			console.log(children[i].childNodes[0].nodeValue);
		}


        // var collection = document.getElementById("bingo_card").childNodes;

        // for(var i=0; i<collection.length; i++)
        // {
        //     console.log(collection[i].childNodes.length)
        // }

    });

});