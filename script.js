let boxes=document.querySelectorAll('.box');

let reset=document.querySelector('#reset_btn');
let player1=true;
console.log(player1);
let messageContainer=document.querySelector(".message-container");
console.log(messageContainer);
let msg=document.querySelector('#msg');
let newbtn=document.querySelector('#new-btn');
let main = document.querySelector("main");



console.log("#msg")

const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],


];
const resetgame = () => {
    for(let box of boxes){
        box.textContent = "";
    }

    messageContainer.classList.add("hide");
    main.classList.remove("hide");
    enableboxes();
    player1 = true;
};

   
const enableboxes=()=>{
    for(let box of boxes)
        box.disabled=false;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(player1===true){
            box.textContent="X";
            player1=false;


        }
        else{
            box.textContent="0";
            player1=true;
        }
        box.disabled = true;
        checkwiner();
        

    })

    
})
const disabbledboxes=()=>{
    for(let box of boxes)
        box.disabled=true;
}
const showwinner = (winner) => {
   msg.textContent = `🎉Congratulations, Winner is ${winner}`; 
    messageContainer.classList.remove("hide");
    newbtn.classList.remove("hide");
    main.classList.add("hide");

    disabbledboxes();

    messageContainer.style.color = "blue";
    messageContainer.style.fontSize = "35px";
    messageContainer.style.fontWeight = "bold";
};

const checkwiner=()=>{
    for(let pattern of winPatterns){
       // console.log(pattern);
        let pos1val=boxes[pattern[0]].textContent;
        let pos2val=boxes[pattern[1]].textContent;
        let pos3val=boxes[pattern[2]].textContent;
       // console.log(pos1val,pos2val,pos3val);
        if(pos1val!="" && pos2val!= "" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }

         

    }
   newbtn.addEventListener("click",(resetgame))
    reset.addEventListener("click",(resetgame))

    

