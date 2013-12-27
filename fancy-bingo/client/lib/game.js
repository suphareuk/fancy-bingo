Bingo = function() {

	this.utilizesNums = (function() {
		var utilizesNums  = [],
			MAX_BINGO_NUM = 75;
		for (var i = 0; i < MAX_BINGO_NUM; i++) {
			utilizesNums.push(i+1);
		}	
		return utilizesNums;	
	}());

	this.player = {
		bingoCard  : {},
		score : { 
			B : [0, 0, 0, 0, 0], 
			I : [0, 0, 0, 0, 0],  
			N : [0, 0, 'free', 0, 0], 
			G : [0, 0, 0, 0, 0],  
			O : [0, 0, 0, 0, 0] 
		},
		win : false
	};

	this.dealer = {
		numbersRemain : [],
		numbersCalled : []
	};

}

Bingo.prototype = {

	shuffleNumbers : function (theLength, numbers) {
		var numberTemp = 0, // A temporary variable to hold reference to index variable i points to
			numberSwap = 0; // The index we will swap  (i.e. the random number)

		for (var i = theLength; i > 0; i--) {
		    numberSwap = Math.floor(Math.random() * i);
		    numberTemp = numbers[i];
		    numbers[i] = numbers[numberSwap];
		    numbers[numberSwap] = numberTemp;
		}	
	},

	placeNumber : function(numbersCalled, numbersRemain) {
		numbersCalled.push(numbersRemain[numbersRemain.length - 1]);
		numbersRemain.pop();
	},

	pushNumbersToColumn : function(numbers, cardObj) {

		for (var i = 0; i < 50; i++) {
			if (numbers[i] <= 15 && cardObj.B.length <= 4) {
			    cardObj.B.push(numbers[i]);
			} else if (numbers[i] >= 16 && numbers[i] <= 30 && cardObj.I.length <= 4) {
				cardObj.I.push(numbers[i]);
			} else if (numbers[i] >= 31 && numbers[i] <= 45 && cardObj.N.length <= 4) {
				cardObj.N.push(numbers[i]);
			} else if (numbers[i] >= 46 && numbers[i] <= 60 && cardObj.G.length <= 4) {
				cardObj.G.push(numbers[i]);
			} else if (numbers[i] >= 61 && numbers[i] <= 75 && cardObj.O.length <= 4) {
				cardObj.O.push(numbers[i]);
			}
		};
		
	},
	
	initDealerNumbers : function() {
		var numbersRemain 	 = this.utilizesNums.concat(),
			numbersRemainLen = numbersRemain.length - 1;
		
		this.shuffleNumbers(numbersRemainLen, numbersRemain);	
		this.dealer.numbersRemain = numbersRemain;
	},

	checkScore : function(calledNumbers, playerData) {
		var lastestCalledNumber = calledNumbers[calledNumbers.length - 1];
		console.log(lastestCalledNumber);
		for(var column in playerData.bingoCard) {
			for (var number in playerData.bingoCard[column]) {
				if (playerData.bingoCard[column][number] === lastestCalledNumber) {
					if (column == 'N' && number == 2) {
						playerData.score[column][number] = 'free';
					} else {
						playerData.score[column][number] = lastestCalledNumber;
					}
					
				}
			}
		}

	},

	isBingo : function(score) {
		var row_bingo = [0,0,0,0,0];
		var diagonal_bingo = [0,0];
		var count = 0;
		var reverse_count = 4;

		for(var row in score) {
			// Row Bingo
			if(score[row].indexOf(0) === -1) {
				this.player.win = true;
				console.log('Column Bingo..........................................');
			};

			// Column Bingo
			for(var i=0; i<score[row].length; i++) {
				if(score[row][i] != 0) {
					row_bingo[i] += 1;
				}
			}

			// Diagonal Bingo
			if(score[row][count] != 0){
				diagonal_bingo[0] += 1;
			}
			if(score[row][reverse_count] != 0){
				diagonal_bingo[1] += 1;
			}
			count++;
			reverse_count--;
		}
		
		if(row_bingo.indexOf(5) > 0 || diagonal_bingo.indexOf(5) > 0 ) {
			this.player.win = true;
			console.log('Bingo................................');
		}

	},

	newCard : function() {
		var cardNumbers    = this.utilizesNums.concat(),
			cardNumbersLen = cardNumbers.length - 1,
			bingoCard	   = { B : [], I : [], N : [], G : [], O : [] }; 
		
		this.shuffleNumbers(cardNumbersLen, cardNumbers);
		this.pushNumbersToColumn(cardNumbers, bingoCard);
		this.player.bingoCard = bingoCard;

	},

	rollNumber : function() {
		var dealerNumRemainLen = this.dealer.numbersRemain.length - 1;
		this.shuffleNumbers(dealerNumRemainLen, this.dealer.numbersRemain);	
		this.placeNumber(this.dealer.numbersCalled, this.dealer.numbersRemain);
		this.checkScore(this.dealer.numbersCalled, this.player);
		this.isBingo(this.player.score);
	}

}

/* sample
var bingoGame1 = new Bingo();
bingoGame1.newCard();
bingoGame1.initDealerNumbers();*/

shootBall= function( number ){
    //remove previous ball
    $(".result-ball").remove();
    var machineBox = $(".dealer_zone");
    var resultBall = '<span class="result-ball animate">'+
        '<span class="ball"></span>'+
        '<span class="ball-shadow"></span>'+
        '<b class="number"> '+ number +' </b>'+
        '</span>';
    machineBox.append( resultBall );
};

