// Conditionis Else-If

// Adds another condition to resolve in an If Else Block

var a = true;
var b = false;
var c;

if (a || b){
    c = true;
} else if (b == true && a == false) {
    c = false
}else{
    c = true;
}

// Nesting

function hello(){
    var msg = 'hello ';
    function world() { msg += 'world.'; }
    world();
    return msg; 
}

console.log(hello());