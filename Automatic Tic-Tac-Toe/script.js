let GameActive = true;

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let winner = null;

let k = 0;
let mark = [];
let s, w;
let i = 0;
let flag = 0;

for (let j = 0; j < 10; j++) {
  mark.push(j);
}

function rem(number) {
    let index = mark.indexOf(number);
    if (index !== -1) {
      mark.splice(index, 1);
    }
    else{
      console.log("Not Found");
    }
  }
  

function isFound(n) {
  for (let j = 1; j <= 9; j++) {
    if (mark[j] === n) {
      return 1;
    }
  }
  return 0;
}

function iswin() {

    if (board[0] == 'O' && board[2] == 'O')        //1 st row
      if (board[1] == ' ')
        return 2;
  
    if (board[0] == 'O' && board[1] == 'O')
      if (board[2] == ' ')
        return 3;
  
    if (board[1] == 'O' && board[2] == 'O')
      if (board[0] == ' ')
        return 1;
  
    if (board[0] == 'O' && board[3] == 'O')       //1 st col
      if (board[6] == ' ')
        return 7;
  
    if (board[0] == 'O' && board[6] == 'O')
      if (board[3] == ' ')
        return 4;
  
    if (board[3] == 'O' && board[6] == 'O')
      if (board[0] == ' ')
        return 1;
  
    if (board[3] == 'O' && board[4] == 'O')       //2 nd row
      if (board[5] == ' ')
        return 6;
  
    if (board[3] == 'O' && board[5] == 'O')
      if (board[4] == ' ')
        return 5;
  
    if (board[5] == 'O' && board[4] == 'O')
      if (board[3] == ' ')
        return 4;
  
    if (board[6] == 'O' && board[7] == 'O')       //3 rd row
      if (board[8] == ' ')
        return 9;
  
    if (board[6] == 'O' && board[8] == 'O')
      if (board[7] == ' ')
        return 8;
  
    if (board[8] == 'O' && board[7] == 'O')
      if (board[6] == ' ')
        return 7;
  
    if (board[1] == 'O' && board[4] == 'O')       //2 rd col
      if (board[7] == ' ')
        return 8;
  
    if (board[1] == 'O' && board[7] == 'O')
      if (board[4] == ' ')
        return 5;
  
    if (board[4] == 'O' && board[7] == 'O')
      if (board[1] == ' ')
        return 2;
  
    if (board[5] == 'O' && board[2] == 'O')       //3 rd col
      if (board[8] == ' ')
        return 9;
  
    if (board[2] == 'O' && board[8] == 'O')
      if (board[5] == ' ')
        return 6;
  
    if (board[8] == 'O' && board[5] == 'O')
      if (board[2] == ' ')
        return 3;
  
    if (board[0] == 'O' && board[4] == 'O')       //primary diagonal
      if (board[8] == ' ')
        return 9;
  
    if (board[0] == 'O' && board[8] == 'O')
      if (board[4] == ' ')
        return 5;
  
    if (board[4] == 'O' && board[8] == 'O')
      if (board[0] == ' ')
        return 1;
  
    if (board[2] == 'O' && board[4] == 'O')       //secondry diagonal
      if (board[6] == ' ')
        return 7;
  
    if (board[2] == 'O' && board[6] == 'O')
      if (board[4] == ' ')
        return 5;
  
    if (board[6] == 'O' && board[4] == 'O')
      if (board[2] == ' ')
        return 3;
  
    return 0;
  }
  
  
  function issafe() {
    // console.log("Hii1235454")
    console.log(board,"rem");
    if (board[0] == 'X' && board[2] == 'X')        //1 st row
      if (board[1] == ' ')
        return 2;
  
    if (board[0] == 'X' && board[1] == 'X')
      if (board[2] == ' ')
        return 3;
  
    if (board[1] == 'X' && board[2] == 'X')
      if (board[0] == ' ')
        return 1;
  
    if (board[0] == 'X' && board[3] == 'X')       //1 st col
      if (board[6] == ' ')
        return 7;
  
    if (board[0] == 'X' && board[6] == 'X')
      if (board[3] == ' ')
        return 4;
  
    if (board[3] == 'X' && board[6] == 'X')
      if (board[0] == ' ')
        return 1;
  
    if (board[3] == 'X' && board[4] == 'X')       //2 nd row
      if (board[5] == ' ')
        return 6;
  
    if (board[3] == 'X' && board[5] == 'X')
      if (board[4] == ' ')
        return 5;
  
    if (board[5] == 'X' && board[4] == 'X')
      if (board[3] == ' ')
        return 4;
  
    if (board[6] == 'X' && board[7] == 'X')       //3 rd row
      if (board[8] == ' ')
        return 9;
  
    if (board[6] == 'X' && board[8] == 'X')
      if (board[7] == ' ')
        return 8;
  
    if (board[8] == 'X' && board[7] == 'X')
      if (board[6] == ' ')
        return 7;
  
    if (board[1] == 'X' && board[4] == 'X')       //2 rd col
      if (board[7] == ' ')
        return 8;
  
    if (board[1] == 'X' && board[7] == 'X')
      if (board[4] == ' ')
        return 5;
  
    if (board[4] == 'X' && board[7] == 'X')
      if (board[1] == ' ')
        return 2;
  
    if (board[5] == 'X' && board[2] == 'X')       //3 rd col
      if (board[8] == ' ')
        return 9;
  
    if (board[2] == 'X' && board[8] == 'X')
      if (board[5] == ' ')
        return 6;
  
    if (board[8] == 'X' && board[5] == 'X')
      if (board[2] == ' ')
        return 3;
  
    if (board[0] == 'X' && board[4] == 'X')       //primery diagonal
      if (board[8] == ' ')
        return 9;
  
    if (board[0] == 'X' && board[8] == 'X')
      if (board[4] == ' ')
        return 5;
  
    if (board[4] == 'X' && board[8] == 'X')
      if (board[0] == ' ')
        return 1;
  
    if (board[2] == 'X' && board[4] == 'X')       //secondry diagonal
      if (board[6] == ' ')
        return 7;
  
    if (board[2] == 'X' && board[6] == 'X')
      if (board[4] == ' ')
        return 5;
  
    if (board[6] == 'X' && board[4] == 'X')
      if (board[2] == ' ')
        return 3;
    return 0;
  }
  
  function showAlertAndRestart() {
    if(winner=='Y'){
      winner=null;
      let p = document.getElementById('winner');
      p.innerText = "Computer wins!";
      setTimeout(function() {
        restart();
      }, 1000);
      return true;
    }
    else{
      return false;
    }
    
  }
  const buttons = document.querySelectorAll('.cell');
  
  function move(index) 
  {
    if(showAlertAndRestart()){
      console.log("hello");
      return;
    };
    console.log(board);
    if (GameActive && board[index] === ' ') {
      board[index] = 'X';
      document.getElementById(`k${index}`).innerHTML = 'X';
      rem(index + 1);
    }
    else{
        alert("you can insert only one time");
        return;
    }
  
    if (GameActive) {
      if(mark.length!==0){
        if (i == 4) {
          k = 1;
        }
        console.log(i);
        if (i === 0) {
          if (board[4] == ' ') {
            board[4] = 'O';
            rem(5);
            document.getElementById(`k4`).innerHTML = 'O';
          }
          else {
            flag = 1;
            board[0] = 'O';
            rem(1);
            document.getElementById(`k0`).innerHTML = 'O';
          }
        }
        else {
          if (i === 1) {
            s = issafe();
            console.log(s,"xtd");
            if (s) {  
              board[s-1] = 'O';
              rem(s);
              document.getElementById(`k${s - 1}`).innerHTML = 'O';
  
            }
            else {
              console.log("hii4567",board);
              if ((board[0] == 'X' || board[2] == 'X' || board[6] == 'X' || board[8] == 'X') && flag == 0 && board[7]==" " ) {
                console.log("k1");
                if(board[7]==" "){
                  board[7] = 'O';
                  rem(8);
                  document.getElementById(`k7`).innerHTML = 'O'; 
                }
              }
              else if (flag === 1) {
                console.log("k2");
                if(board[6]==' '){
                  board[6] = 'O';
                  rem(7);
                  document.getElementById(`k6`).innerHTML = 'O';
                }
              }
              else {
                console.log("k3");
                if (board[5] == 'X' || board[7] == 'X') {
                  if (board[8] == ' ') {
                    console.log("k7");
                    board[8] = 'O';
                    rem(9);
                    document.getElementById(`k8`).innerHTML = 'O';
                  }
                }
                else if (board[1] == 'X' || board[3] == 'X') {
                  if (board[0] == ' ') {
                    board[0] = 'O';
                    rem(1);
                    document.getElementById(`k0`).innerHTML = 'O';
  
                  }
                }
                else if (board[1] == 'X' || board[5] == 'X') {
                  if (board[2] == ' ') {
                    board[2] = 'O';
                    rem(3);
                    document.getElementById(`k2`).innerHTML = 'O';
  
                  }
                }
                else if (board[3] == 'X' || board[7] == 'X') {
                  if (board[6] == ' ') {
                    board[6] = 'O';
                    rem(7);
                    document.getElementById(`k6`).innerHTML = 'O';
                  }
                  else {
                    document.getElementById(`k${mark[1]-1}`).innerHTML = 'O';
                    board[mark[1] - 1] = 'O';
                    rem(mark[1]);
                  }
                }
              }
            }
          }
          else {
            s = issafe();
            console.log(s);
            w = iswin();
            console.log(w);
            if (w) {
              board[w - 1] = 'O';
              rem(w);
              document.getElementById(`k${w - 1}`).innerHTML = 'O';
              k = 3;
              winner = 'Y';
            }
            else {
              console.log("s");
              if (s) {
                board[s - 1] = 'O';
                document.getElementById(`k${s - 1}`).innerHTML = 'O';
                rem(s);
              }
              else {
                console.log(mark[1],"assigned");
                board[mark[1] - 1] = 'O';
                document.getElementById(`k${mark[1] - 1}`).innerHTML = 'O';
                rem(mark[1]);
              }
            }
          }
        }
        i = i + 1;
      }
      else{
        let p = document.getElementById('winner');
        p.innerHTML = "Tie!";
      }
    }
      
  };  

function restart() {
  GameActive = true;
  board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  winner = null;
  mark = [1,2,3,4,5,6,7,8,9];
  i=0;
  let p = document.getElementById('winner');
  p.innerHTML = "";
  for (let j = 0; j < 9; j++) {
    document.getElementById(`k${j}`).innerHTML = ' ';
  }
}
