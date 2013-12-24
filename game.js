var bingoNumbers = [];

function generateBingoNumber() {
	for (var i = 0; i < 75; i++) {
		bingoNumbers.push(i+1);		
	}
}

function shuffleBingoNumber(theLength, bingNums) {

	var bingoNumberTemp, // A temporary variable to hold reference to index variable i points to
		bingoNumberSwap; // The index we will swap  (i.e. the random number)

	for (var i = theLength; i > 0; i--) {
	    bingoNumberSwap = Math.floor(Math.random() * i);
	    bingoNumberTemp = bingNums[i];
	    bingNums[i] 	= bingNums[bingoNumberSwap];
	    bingNums[bingoNumberSwap] = bingoNumberTemp;
	}	

}

generateBingoNumber();
shuffleBingoNumber(bingoNumbers.length - 1, bingoNumbers);
console.log(bingoNumbers);

