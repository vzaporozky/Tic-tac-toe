window.onload = function Tic_tac_toe() {
    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div id="block" class="block"></div>';
    }

    var move = 0;
    document.getElementById('game').onclick = function(event) {
        if (event.target.className == 'block' && event.target.innerHTML === '') {
            if (move % 2 == 0) {
                event.target.innerHTML = 'X';
                document.getElementById('player_1').style.background = 'lightgray';
                document.getElementById('player_2').style.background = '#c8893e';
            } else {
                event.target.innerHTML = 'O';
                document.getElementById('player_1').style.background = '#c8893e';
                document.getElementById('player_2').style.background = 'lightgray';
            }
            move++;
            document.getElementById("clicks").innerHTML = move;
            checkWinner();
        }
    }

    function checkWinner() {
        var allblocks = document.getElementsByClassName('block');
        arr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];


        for (var j = 0; j < arr.length; j++) {
            if (allblocks[arr[j][0]].innerHTML == 'X' && allblocks[arr[j][1]].innerHTML == 'X' && allblocks[arr[j][2]].innerHTML == 'X'){
                allblocks[arr[j][0]].style.color = 'green';
                allblocks[arr[j][1]].style.color = 'green';
                allblocks[arr[j][2]].style.color = 'green';
                document.getElementById('result').textContent = 'Player 1 won!';
                document.getElementById('result').style.fontSize = "35px";
                document.getElementById('panel').classList.toggle('panel_winner');
                    document.getElementById('player_1').style.background = 'lightgray';
                    document.getElementById('player_2').style.background = 'lightgray';
                    document.getElementById('game').onclick = function(event) {
                        if (event.target.className == 'block' && event.target.innerHTML === '') {
                            if (move % 2 == 0) {
                                event.target.innerHTML = '';
                                document.getElementById('panel').classList.toggle('panel_winner');
                            } else {
                                event.target.innerHTML = '';
                                document.getElementById('panel').classList.toggle('panel_winner');
                            }
                            checkWinner();
                        }
                    }
            }
            else if (allblocks[arr[j][0]].innerHTML == 'O' && allblocks[arr[j][1]].innerHTML == 'O' && allblocks[arr[j][2]].innerHTML == 'O'){
                allblocks[arr[j][0]].style.color = 'green';
                allblocks[arr[j][1]].style.color = 'green';
                allblocks[arr[j][2]].style.color = 'green';
                document.getElementById('result').textContent = 'Player 2 won!';
                document.getElementById('result').style.fontSize = "35px";
                document.getElementById('panel').classList.toggle('panel_winner');
                    document.getElementById('player_1').style.background = 'lightgray';
                    document.getElementById('player_2').style.background = 'lightgray';
                    document.getElementById('game').onclick = function(event) {
                        if (event.target.className == 'block' && event.target.innerHTML === '') {
                            if (move % 2 == 0) {
                                event.target.innerHTML = '';
                                document.getElementById('panel').classList.toggle('panel_winner');
                            } else {
                                event.target.innerHTML = '';
                                document.getElementById('panel').classList.toggle('panel_winner');
                            }
                            checkWinner();
                        }
                    }
            }else{
                var myArray = [];
                for(let i = 0; i < allblocks.length; i++){
                    myArray.push(allblocks[i].innerHTML)
                }
                if(!myArray.includes("")){
                document.getElementById('result').textContent = "It's a draw!";
                document.getElementById('result').style.fontSize = "39px";
                document.getElementById('result').style.color = "black";
                document.getElementById('panel').style.background = ('#c8893e');
                    document.getElementById('player_1').style.background = 'lightgray';
                    document.getElementById('player_2').style.background = 'lightgray';
                    document.getElementById('game').onclick = function(event) {
                        if (event.target.className == 'block' && event.target.innerHTML === '') {
                            if (move % 2 == 0) {
                                event.target.innerHTML = '';
                            } else {
                                event.target.innerHTML = '';
                            }
                            checkWinner();
                        }
                    }
                }
            }
        }
    }

}
