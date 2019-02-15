
let dutchQuestion1 = [ "Morgen","Morning"]
let dutchQuestion2 = ["Doei", "Bye"]

const data = {
    dutchQuestions : [ dutchQuestion1, dutchQuestion2]   
}



    const displayh2 = document.createElement('question')




let x = Math.floor(Math.random()*data.dutchQuestions.length)
let dutchQ = data.dutchQuestions[x]
let dutchQAns = dutchQ[0]

function submitClick () {
    
    if (dutchQAns = dutchQ[0]) {
    
    document.getElementById("question").textContent = dutchQ[1]
}
}
    function submitClickNext () {
    dutchQ 
    if (dutchQ = data.dutchQuestions[x]) {
       dutchQ = data.dutchQuestions[x+1]
}
}

document.getElementById("question").textContent = dutchQAns
console.log(dutchQAns)