let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1, num2){
    let result = num1 / num2;
    return result;
}

document.querySelector("h1").addEventListener("click", () => {
    alert("别戳我");
});

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/1.jpg'){
        myImage.setAttribute('src', 'images/2.jpg');
    }else{
        myImage.setAttribute('src', 'images/1.jpg');
    }
}

let myButtoon = document.querySelector('button');
function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = '欢迎' + myName;
    }
    
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent = '欢迎' + storeName;
}

myButtoon.onclick = ()=>{
    setUserName();
}
