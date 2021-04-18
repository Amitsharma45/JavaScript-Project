// alert("working");
function re(){
    run();
}
function run(){

    var num1= Math.floor(Math.random()*6)+1;
    var a1='img/'+num1+'.PNG';
    
    var num2= Math.floor(Math.random()*6)+1;
    var a2='img/'+num2+'.PNG';
    // console.log(num1);
    // console.log(num2);
    document.querySelectorAll('img')[0].setAttribute("src",a1);
    document.querySelectorAll('img')[1].setAttribute("src",a2);
    
    if(num1>num2){
        document.querySelector('h1').innerHTML="Player 1 Win";
    
    }else if(num1<num2) {
        document.querySelector('h1').innerHTML="Player 2 Win";
    }else{
        document.querySelector('h1').innerHTML="Draw !!";
    }
}

run();

