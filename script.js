let btnRef=document.querySelectorAll(".button-option");
let popupRef=document.querySelector(".popup");
let newgameBtn=document.getElementById("new-game");
let restartBtn=document.getElementById("restart");
let msgRef= document.getElementById("message");
//let winning pattern
let winningPattern=[[0,1,2],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[3,4,5],
[6,7,8],
[2,4,6]];
//players 'X' plays first
let xTurn= true;
let count=0;
const Disabledbuttons=()=>
{
    btnRef.forEach((element) => (element.Disabled=true));
    popupRef.classList.remove("hide");
};
const enablebuttons=()=> {
    btnRef.forEach((element) =>{
        element.innerText="";
        element.Disabled= false;
    });
    popupRef.classList.add("hide");

};
const winFuction=(letter)=>{
    Disabledbuttons();
    if (letter=='X'){
        msgRef.innerHTML="&#x1f389 ,<br> 'x'wins";
    }
    else{
        msgRef.innerHTML="&#1f389 ; <br> 'o' wins";

    }
};
const drawFunction =() =>{
    Disabledbuttons ();
    msgRef.innerHTML="&#x1f60E ;<br> it;s dra";
};
// new
//This fuction is executedwhen  player win
newgameBtn.addEventListener("click",()=>{
    count=0;
    enablebuttons();
});
restartBtn.addEventListener("click,",()=>{
    count=0;
    enablebuttons();
});

// const winFuction=(letter)=>{
//     Disabledbuttons();
// };
// winlogic
const winChecker=()=>{
    for (let i of winningPattern){
        let[element1,element2,element3]=[
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText];

//check if element are filled
// if 3 empty elements are same and would give win as would
if (element1!="" && element2!="",
element3!=""){
if (element1==element2 && element2==element3){
    winFuction(element1);

}
    }
}
};
//display x/o on click
btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{
        if (xTurn){
            xTurn=false;
            //display x
            element.innerText="X";
            element.Disabled=true;
        }
        else{
            xTurn=true;
            //display y
            element.innerText="O";
            element.Disabled=true;

        }
        count+=1;
        if (count==9){
drawFunction();
        }
        winChecker();
    });
});

window.onload= enablebuttons;