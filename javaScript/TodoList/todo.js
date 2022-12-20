const input =document.getElementById('UserInput');
const addbutton = document.getElementById('addInput');
const display = document.getElementById('display');

addbutton.addEventListener('click',function(){
    var para = document.createElement('p');
    para.classList.add('paragraph-styling');
    para.innerText = input.value;
    display.appendChild(para);
    input.value = "";
    para.addEventListener('click',function(){
        para.style.textDecoration = "line-through";
    })
    para.addEventListener('dbclick',function(){
        display.removeChild(para);
    })
})