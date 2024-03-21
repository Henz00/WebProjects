let Calculator = {
    result : 0,
    addition: function(x, y){
        return result = parseInt(x)+parseInt(y);
    },
    subtraction: function(x,y){
        return result = parseInt(x)-parseInt(y);;
    },
    multiplication: function(x,y){
        return result = parseInt(x)*parseInt(y);;
    },
    division: function(x,y){
        return result = parseInt(x)/parseInt(y);;
    },
    loadData: function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("ajax_call").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "Data.txt", true);
        xhttp.send();
    }
};

console.log(`The result is: ${Calculator.divition(66,4)}`);
console.log(`The result is: ${Calculator.divition(16,4)}`);
console.log(`The result is: ${Calculator.addition(result,4)}`); 