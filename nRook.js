var board = new Board(makeEmptyMatrix(n));

var rRow (r,c){
	for (colIndex=0; colIndex<n;colIndex++){
		board.togglePiece(r,colIndex);
		rRow(r+1,c);
		board.togglePiece(r,c);
	}
	if(r<n & c <n){	//NOT END OF BOARD
		board.togglePiece(r,c);
		if(board.hasAnyRooksConflicts()){	// CONFLICT
			board.togglePiece(r,c);
		}

	}else{

	}
};
rRow(0,0)

/*
var board = new Board(makeEmptyMatrix(n));

function check(r){
	for (var c=0;c<n;c++){
		board.togglePiece(r,c);
		if(!board.hasAnyRooksConflicts()){ //no conflict
			if(r+1<n){
				check(r+1);
				board.togglePiece(r,c);
			} else {
				counter++;
				board.togglePiece(r,c);
			}
		}
		board.togglePiece(r,c);
	}
};

check(0);
*/