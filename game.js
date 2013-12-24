var userBingoNumbers = [],
	rollNumbers	 	 = [],
	numberLog		 = [],
	columnB 		 = [],
	columnI 		 = [],
	columnN 		 = [],
	columnG 		 = [],
	columnO 		 = [];

function generateBingoNumber(targetArray) {
	for (var i = 0; i < 75; i++) {
		targetArray.push(i+1);		
	}
}

function shuffleBingoNumber(theLength, bingNums) {
	var bingoNumberTemp = 0, // A temporary variable to hold reference to index variable i points to
		bingoNumberSwap = 0; // The index we will swap  (i.e. the random number)

	for (var i = theLength; i > 0; i--) {
	    bingoNumberSwap = Math.floor(Math.random() * i);
	    bingoNumberTemp = bingNums[i];
	    bingNums[i] 	= bingNums[bingoNumberSwap];
	    bingNums[bingoNumberSwap] = bingoNumberTemp;
	}	

}

function rollNumber(targetArray) {
	var targetArrayLen = targetArray.length - 1;
	shuffleBingoNumber(targetArrayLen, targetArray);	
	numberLog.push(targetArray[0]);
	targetArray.shift();
}

generateBingoNumber(rollNumbers);
generateBingoNumber(userBingoNumbers);
shuffleBingoNumber(userBingoNumbers.length - 1, userBingoNumbers)

for (var i = 0; i < userBingoNumbers.length - 1; i++) {
	if (userBingoNumbers[i] <= 15) {
		columnB.push(userBingoNumbers[i]);
	} else if (userBingoNumbers[i] >= 16 && userBingoNumbers[i] <= 30) {
		columnI.push(userBingoNumbers[i]);
	} else if (userBingoNumbers[i] >= 31 && userBingoNumbers[i] <= 45) {
		columnN.push(userBingoNumbers[i]);
	} else if (userBingoNumbers[i] >= 46 && userBingoNumbers[i] <= 60) {
		columnG.push(userBingoNumbers[i]);
	} else if (userBingoNumbers[i] >= 61 && userBingoNumbers[i] <= 75) {
		columnO.push(userBingoNumbers[i]);
	}
	
};

// Simulate roll turn
/*for (var i = 1; i <= 20; i++) {
	rollNumber(winnerNumbers);
	console.log('Roll ' + i);
	console.log("number log!!!!!!!");
	console.log(numberLog);
};*/