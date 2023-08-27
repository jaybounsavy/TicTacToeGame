$(document).ready(function() {


    let currentActivePlayer = 1;

    const $game = $('#game');
    const $turn = $('#turn');
    const $full = $('#full');
    const $winner = $('#winner');
    const $clear = $('#clear');

    let valueForBoxes = ['','','','','','','','',''];

    console.log( $game );

    const $cells = $('.cell', $game);

    console.log( $cells ); 


    // Process each click on each box
    $cells.each(function(index, cell) {

        $(cell).on('click', (e) => {
            console.log($(e.target).html() );
            $(e.target).html('X');

            if ( currentPlayer() === 1) {
                $(e.target).html('O');
            } 
            else {
                $(e.target).html('X');
            }

            isAllBoxFilled();

            fillValueForBoxes();

            isThereWinner();

        });


    });


    // Detect on a "Clear" button click
    $clear.on('click', (e) => {

        clearAllBoxes();

    });



    // Determine the current player
    function currentPlayer() {

        if ( currentActivePlayer == 1 ) {
            currentActivePlayer = 2;
            $turn.html('It is player 2 (X) turn.');
            return 1;
        }    
        else {    
            currentActivePlayer = 1;       
            $turn.html('It is player 1 (O) turn.');     
            return 2;
        }    
    }


    // Check if all boxes have been filled
    function isAllBoxFilled() {

        let totalFilleBox = 0;
        let value = '';

        $cells.each(function(index, cell) {

            value = $(cell).html();
            console.log ("value " + value );

            if (value.length > 0) {
                totalFilleBox = totalFilleBox +  1;
            } 
            else {

            }
            
            console.log ("totalFilledBox = " + totalFilleBox );

            
        });



        if ( totalFilleBox === 9 ) {

            $full.html('All boxes have been filled.');
            $winner.html('This game ended in a tie.');            
            return true;
        }
        else {
            return false
        }


    }

  
    // Fill the global array with values of the boxes
    function fillValueForBoxes() {


        $cells.each(function(index, cell) {

            // console.log( $(cell).html() );

            value = $(cell).html();

            valueForBoxes[index] =  value;

            for (let i=0; i < 9; i++ ) {
                console.log("value at index" + i + " is " + valueForBoxes[i]);
            }

           
        });

    }   


    // Clear all boxes
    function clearAllBoxes() {


        $cells.each(function(index, cell) {

            $(cell).html("");
            
        });

    }


    function isThereWinner() {

        console.log( "INSIDE isThereWinner function." );

        for (i=0; i < 9; i++ ) {      
            
            console.log("Value in box " + i + " = " + valueForBoxes[i] );
        }


        if ( valueForBoxes[0] === 'O' && valueForBoxes[1] === 'O' && valueForBoxes[2] === 'O'   ) {
            $winner.html('Congratulation !.. Player 1 won the game.');     
        }
        else if ( valueForBoxes[0] === 'X' && valueForBoxes[1] === 'X' && valueForBoxes[2] === 'X'   ) {
            $winner.html('Congratulation !.. Player 2 won the game.');     
        }
        else if ( valueForBoxes[3] === 'O' && valueForBoxes[4] === 'O' && valueForBoxes[5] === 'O'   ) {
            $winner.html('Congratulation !.. Player 1 won the game.');     
        }
        else if ( valueForBoxes[3] === 'X' && valueForBoxes[4] === 'X' && valueForBoxes[5] === 'X'   ) {
            $winner.html('Congratulation !.. Player 2 won the game.');     
        }
        else if ( valueForBoxes[6] === 'O' && valueForBoxes[7] === 'O' && valueForBoxes[8] === 'O'   ) {
            $winner.html('Congratulation !.. Player 1 won the game.');     
        }
        else if ( valueForBoxes[6] === 'X' && valueForBoxes[7] === 'X' && valueForBoxes[8] === 'X'   ) {
            $winner.html('Congratulation !.. Player 2 won the game.');     
        }
        else if ( valueForBoxes[0] === 'O' && valueForBoxes[3] === 'O' && valueForBoxes[6] === 'O'   ) {
            $winner.html('Congratulation !.. Player 2 won the game.');     
        }
        else if ( valueForBoxes[0] === 'X' && valueForBoxes[3] === 'X' && valueForBoxes[6] === 'X'   ) {
            $winner.html('Congratulation !.. Player 2 won the game.');     
        }
        else if ( valueForBoxes[1] === 'O' && valueForBoxes[4] === 'O' && valueForBoxes[7] === 'O'   ) {
            $winner.html('Congratulation !.. Player 1 won the game.');     
        }
        else if ( valueForBoxes[1] === 'X' && valueForBoxes[4] === 'X' && valueForBoxes[7] === 'X'   ) {
            $winner.html('Congratulation !.. Player 2 won the game.');     
        }
        else if ( valueForBoxes[2] === 'O' && valueForBoxes[5] === 'O' && valueForBoxes[8] === 'O'   ) {
            $winner.html('Congratulation !.. Player 1 won the game.');     
        }
        else if ( valueForBoxes[2] === 'X' && valueForBoxes[5] === 'X' && valueForBoxes[8] === 'X'   ) {
            $winner.html('Congratulation !.. Player 2 won the game.');     
        }
        else if ( valueForBoxes[0] === 'O' && valueForBoxes[4] === 'O' && valueForBoxes[8] === 'O'   ) {
            $winner.html('Congratulation !.. Player 1 won the game.');     
        }
        else if ( valueForBoxes[0] === 'X' && valueForBoxes[4] === 'X' && valueForBoxes[8] === 'X'   ) {
            $winner.html('Congratulation !.. Player 2 won the game.');     
        }
        else if ( valueForBoxes[2] === 'O' && valueForBoxes[4] === 'O' && valueForBoxes[6] === 'O'   ) {
            $winner.html('Congratulation !.. Player 1 won the game.');     
        }
        else if ( valueForBoxes[2] === 'X' && valueForBoxes[4] === 'X' && valueForBoxes[6] === 'X'   ) {
            $winner.html('Congratulation !.. Player 2 won the game.');     
        }

    }  





});