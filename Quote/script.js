// const quoteee =document.getElementsByClassName('text');
const q = document.querySelector('.text');
// const a = document.getElementsByClassName('.authortext');
const a=document.querySelector('.authortext');
async function getquote(){
    // const pr='https://cors-anywhere.herokuapp.com/'
    // const apiurl='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    const api ='https://api.quotable.io/random';
    try{
        const response =await fetch(api);
        const data =await response.json()
        // console.log(data);
        // quoteee.innerHTML=data.content;
        q.innerHTML = data.content;
        a.innerHTML= data.author;



    }catch(error){
        // getquote();
        console.log("error");
    }
}
function tw(){
    const q1 =q.innerHTML;
    const a1 =a.innerHTML;
    const turl=`https://twitter.com/intent/tweet?text=${q1} - ${a1}`;
    window.open(turl,'_blank')
    // console.log(q1);
}

getquote();

function newquote(){
    getquote();
}
