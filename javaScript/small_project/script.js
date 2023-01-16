var index =0;

function changeColor(){
    var colors=['red','green','blue','yellow','black','purple','lightblue'];
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = colors[index++];
    if(index > colors.length-1){
        index=0;
    }
}