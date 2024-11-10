let  boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let msgc=document.querySelector(".msgc");
let rec=document.querySelector(".box1");
let btn1=document.querySelector(".btn1");
let btn=document.querySelector(".btn");
turnO=true;
val=false;
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            if(!val){
    box.innerHTML="O";
    count++;
turnO=false;}
else{
    box.disabled=true;
}
}
else{
    if(!val){
    box.innerHTML="X";
    count++;
    turnO=true;}
    else{
        box.disabled=true;
    }
}
box.disabled=true;
winner();
    });
})
const showWinner=(winner)=>{
msg.innerHTML=`winner is <strong style="color:red">${winner}</strong>`;
msgc.classList.remove("hide");
}
let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const winner=()=>{

        winningPattern.forEach((pattern)=>{
           let  posval1=boxes[pattern[0]].innerText;
           let  posval2=boxes[pattern[1]].innerText;
           let  posval3=boxes[pattern[2]].innerText;
            if(posval1!="" && posval2!=""&&posval3!="")
            {
                if(posval1===posval2&& posval2===posval3)
                {
                    console.log("winner",posval1);
                    val=true;
                 showWinner(posval1);
                
                }
                else if(count===9){
                    msg.innerHTML="Draw Match";
                    msgc.classList.remove("hide");
                    val=true;
                }
            }
            })

}
btn.addEventListener("click",()=>{
boxes.forEach((box)=>{
    box.disabled=false;
    val=false;
    box.innerHTML="";
    msgc.classList.add("hide");
})
});

btn1.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        val=false;
        box.innerHTML="";
        msgc.classList.add("hide");
    })
    });