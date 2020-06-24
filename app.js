function inputNum(num){
    var result = document.getElementById('num');
    result.value += num;
}
function clearScreen(){
    var screen = document.getElementById('num');
    screen.value = "";
}
function result(){
    var result = document.getElementById('num');
    result.value = eval(result.value);
}