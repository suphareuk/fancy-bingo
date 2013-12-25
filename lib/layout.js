
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

$("#mock_new_card").on( "click", function(event) {

	console.dir($("#bingo_card"));

	var children = $('#bingo_card').children();
	for(var i = 0;i < children.length;i++){
		console.log("column:"+i);
			
		console.log(children[i].children[0].innerHTML);
		console.log(children[i].children[1].innerHTML);
		console.log(children[i].children[2].innerHTML);
		console.log(children[i].children[3].innerHTML);
		console.log(children[i].children[4].innerHTML);

		//children.eq(i).children[0].innerHTML("test");
		//children.eq(i).css("background-color", "red" );
	}

});


