$(document).ready(function(){
    var turnCount=0;

    $('#tableboard').find('td').on('click', function(){
        if (turnCount % 2 === 0){
            $(this).innerHTML='X';
            checkVictory('X');
        } else {
            //player 2's turn (O)
            $(this).innerHTML='O';
            checkVictory('O');
        }
        turnCount++;

    });
