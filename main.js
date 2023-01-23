function numbers(value){
    document.getElementById('result').value +=value;
}

function operation(){
var ope = document.getElementById('result').value;
if (ope==0) {
    document.getElementById('result').value ="Sin operaciones"
    
}else {
    document.getElementById('result').value = eval(ope);
}

}

function reset(){
    document.getElementById('result').value =" ";
}
