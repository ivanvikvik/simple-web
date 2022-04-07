function calculate() {
    var elementA = document.getElementById("a")
    var elementB = document.getElementById("b")
    var resultElement = document.getElementById("result")

    var a = Number(elementA.value);
    var b = Number(elementB.value);

    var c = a + b

    resultElement.innerHTML = "Result = " + c;
}