

function Clr(){
    document.getElementById("screen").value = "";
};


function display(val){
    document.getElementById("screen").value += val;
}

function equate(){
    let x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;
};