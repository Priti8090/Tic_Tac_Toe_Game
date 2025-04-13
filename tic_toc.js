let cells=document.querySelectorAll('.cell');
let reset_btn=document.querySelector('#reset-btn');
let msg=document.querySelector('#game-status');
let msg_container=document.querySelector('.game-info');

let chance_O=true;
//make  all cells enable after reset game 
var win=0;
var count=0;
const enabled_cell= () =>{
    for(let cell of cells){
        cell.innerText=" ";
    }
};
// showing the winner

const showWinner = (winner) =>
{
msg.innerText=`Congratulations ! , Player '${winner}' Wins`;
//    disabled_cell;
    win=1;
    count=0;
   return;
};

//checking for winning pattern

const win_patterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        //player O is playing
     if(!cell.innerText && win==0){ 
        if(chance_O){
          
            cell.innerText="O";
            chance_O=false;
        }
         //player X is playing
        else{ 
            cell.innerText="X";
            chance_O=true;
        }
     }  
     //checking for draw
    count++;
     let isWinner =  checkWinner();
     if(count===9 && !isWinner){
        gameDraw();
     }
    });
});  
const gameDraw = () =>{
    msg.innerText="It's Draw Game !";
    count=0;

}; 
//checking for winner
  const checkWinner = () =>{
    for(let pattern of win_patterns){

       let position1= cells[pattern[0]];
       let position2= cells[pattern[1]];
       let position3= cells[pattern[2]];
      

     if(position1.innerText != "" && position2.innerText != "" && position3.innerText != ""){
       
        
        if(position1.innerText==position2.innerText && position2.innerText== position3.innerText){
         
          position1.style.backgroundColor='green';
          position2.style.backgroundColor='green';
          position3.style.backgroundColor='green';

          position1.style.color="white";
          position2.style.color="white";
          position3.style.color="white";
            
            showWinner(position1.innerText);

        }
     }

    }
  };
  
  const reset_game = () =>{
      cells.forEach(myfun)
      function myfun(e){
        e.style.backgroundColor=''
        e.style.color="";
    
      }

    chance_O=true;
    msg.innerText=" ";
    enabled_cell();
    win=0;
  };
  reset_btn.addEventListener("click",reset_game);