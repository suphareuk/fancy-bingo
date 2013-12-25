
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

	}

	var colB = new Array(15,4,5,7,1);
	for(var i = 0;i<5;i++){
		$("#b"+i).html(colB[i]);
	}

	var colI = new Array(17,16,27,20,24);
	for(var i = 0;i<5;i++){
		$("#i"+i).html(colI[i]);
	}

	var colN = new Array(37,41,0,35,39);
	for(var i = 0;i<5;i++){
		if(i!=2){
			$("#n"+i).html(colN[i]);
		}
	}

	var colG = new Array(46,48,52,59,60);
	for(var i = 0;i<5;i++){
		$("#g"+i).html(colG[i]);
	}

	var colO = new Array(62,66,63,68,64);
	for(var i = 0;i<5;i++){
		$("#o"+i).html(colO[i]);
	}

});


