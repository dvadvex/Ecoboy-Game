const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const basicLoad = async () => {
    await sleep(5000)
    console.log("slept")
}

document.getElementById("bober").textContent = questions[0].question
document.getElementById("b1").textContent = questions[0].answers[0]
document.getElementById("b2").textContent = questions[0].answers[1]
document.getElementById("b3").textContent = questions[0].answers[2]
document.getElementById("b4").textContent = questions[0].answers[3]

let correctAnswer = questions[0].correct

function changeQA(){
    document.getElementById("bober").textContent = questions[1].question

    document.getElementById("b1").textContent = questions[1].answers[0]
    document.getElementById("b2").textContent = questions[1].answers[1]
    document.getElementById("b3").textContent = questions[1].answers[2]
    document.getElementById("b4").textContent = questions[1].answers[3]

    document.getElementById("output").textContent = ""

    correctAnswer = questions[1].correct
}

async function checkAnswer(ans){
    if(ans == correctAnswer){
        document.getElementById("output").textContent = "Correct!"
        stats[0].money += 67
    } else {
        document.getElementById("output").textContent = "Skill issue!"
        stats[0].money -= 67
    }

    await sleep(2000)
    changeQA()
}

document.getElementById("b1").addEventListener("click", () => checkAnswer(0))
document.getElementById("b2").addEventListener("click", () => checkAnswer(1))
document.getElementById("b3").addEventListener("click", () => checkAnswer(2))
document.getElementById("b4").addEventListener("click", () => checkAnswer(3))


console.log("plapplapplap")