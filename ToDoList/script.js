show();
function add() {
    // let value =document.getElementById('input').value;
    // console.log(value);
    // document.getElementById('input').value='';
    let data = document.getElementById("input");
    // let adddata =document.getElementById("container");
    let object = localStorage.getItem('value');
    if (object == null) {
        obj = [];
    } else {
        obj = JSON.parse(object);
    }
    if(data.value.length!=0){
        obj.push(data.value);
        localStorage.setItem('value', JSON.stringify(obj));
        data.value = '';
        show();
    }else{
        alert("Please write any vlaue !")
    }
}


function show() {
    let note = localStorage.getItem('value');
    if (note == null) {
        notes = [];
    } else {
        notes = JSON.parse(note);
    }

    let htm = "";
    notes.forEach(function (element, index) {
        htm +=
            `<div class="node">
    <h3>Note ${index + 1}</h3>
    <p style="display: inline-block;" >${element}</p>
    
    </div>`;

    });
    let add = document.getElementById("ad");
    if(notes.length!=0){
        add.innerHTML=htm;

    }else {
        add.innerHTML = `<h1>Nothing to show! Use "Add a Note" section above to add notes.</h1>`;
    }
    

    // add.innerHTML = htm;
}

function clea() {
    localStorage.clear();
    show();
}