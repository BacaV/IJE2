

function gameStart(){
    
    let randomNumber

    randomGenerator();

    let buttons = document.querySelectorAll(".numberbtn").length;
    for(let i = 0; i < buttons ;i++){
        document.querySelectorAll(".numberbtn")[i].addEventListener("click", function(){
            var buttonClick = this.innerHTML;
            checkNumber(buttonClick);
        })
    }


    function randomGenerator(){
        randomNumber = Math.floor((Math.random() * 10) + 1);
    }

    function checkNumber(value){
        if(randomNumber == value){
            document.getElementById("checkicon").style.zIndex = "1"
            document.getElementById("tryagain").style.visibility = "visible"
            document.getElementById("tryagain").addEventListener("click", function(){
                document.getElementById("checkicon").style.zIndex = "-1"
                document.getElementById("tryagain").style.visibility = "hidden"
                randomGenerator();
            });
        } else{
            document.getElementById("removeicon").style.zIndex = "1"
            document.getElementById("tryagain").style.visibility = "visible"
            document.getElementById("tryagain").addEventListener("click", function(){
                document.getElementById("removeicon").style.zIndex = "-1"
                document.getElementById("tryagain").style.visibility = "hidden"
                randomGenerator();

            });
        }
    }



}

gameStart();

let listArray = []

var form=document.getElementById("formId");
function submitForm(event){
   event.preventDefault();
}

form.addEventListener('submit', submitForm);



function addItem(){
    let item = document.querySelector('[name="item"]').value
    listArray.push(item);
    console.log(listArray);
        for(let j = 0; j < listArray.length; j++){
            const para = document.createElement("p");
            const node = document.createTextNode(listArray[j].toUpperCase());
            para.appendChild(node);
            const element = document.getElementById("div1");
            element.appendChild(para);
        }
        listArray.shift();
}

document.getElementById("formbtn").addEventListener("click", addItem);

let a = 5;
let b = 6;
let c = 7;
let d = 8;

function multiplyx2(a,b){
    return (c*d)*2;
}

let para2 = document.createElement("p");
let node2 = document.createTextNode("(7 * 8) * 2 = " + multiplyx2(a,b));
para2.appendChild(node2);
let element2 = document.getElementById("div2");
element2.appendChild(para2);

function multiply(a,b){
    return a*b;
}

let para1 = document.createElement("p");
let node1 = document.createTextNode("5 * 6 = " + multiply(a,b));
para1.appendChild(node1);
let element1 = document.getElementById("div2");
element1.appendChild(para1);