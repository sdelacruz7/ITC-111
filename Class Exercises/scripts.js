var val1, val2;
function loadDisplay(num) {
    document.getElementById('display2').value += num.value.toString();
}
function delFromRight() {
    document.getElementById('display2').value = document.getElementById('display2').value.slice(0, -1);
}
function clearDisplay() {
    document.getElementById('display2').value = "";
}
function setOp(tag) {
    val1 = document.getElementById('display2').value + " " + tag.value;
    document.getElementById('display1').innerHTML = val1;
    document.getElementById('display2').value = "";

}