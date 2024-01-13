let guessNumberElement = document.querySelector(".guess-number");
let remainingGuessesElement = document.querySelector(".remaining-guesses")
let formElement = document.querySelector("form");
let numberInputElement = document.querySelector(".number-input");
let numberBtnElement = document.querySelector(".number-btn");
let numberComparisonParagraphElement = document.querySelector(".number-comparison-paragraph")
let selectInputElement = document.querySelector(".select-input")

function randomNumberSet() {
    return Math.round(Math.random() * 98 + 1);
}

let randomNumber = randomNumberSet();

function difficultyChecker(){
    if (selectInputElement.value == "Easy-Diff"){
        guessNumberElement.textContent = "12";
    }
    else if (selectInputElement.value == "Normal-Diff"){
        guessNumberElement.textContent = "10";
    }
    else if (selectInputElement.value == "Hard-Diff"){
        guessNumberElement.textContent = "8";
    }
    else if (selectInputElement.value == "Expert-Diff"){
        guessNumberElement.textContent = "6";
    }
    else {
        guessNumberElement.textContent = "4";
    }
    remainingGuessesElement.classList.replace("d-none","d-block");
    formElement.classList.replace("d-none","d-block");
    numberInputElement.value = ""
    numberComparisonParagraphElement.textContent = "";
    numberComparisonParagraphElement.classList.remove("color-green");
    numberComparisonParagraphElement.classList.remove("color-red");
    numberComparisonParagraphElement.classList.remove("color-yellow");
    return randomNumber = randomNumberSet();
}

function numberChecker(event) {
    event.preventDefault();
    if (numberInputElement.value < 100 && numberInputElement.value > 1 && guessNumberElement.textContent >= 0){
        if (numberInputElement.value > randomNumber){
            numberComparisonParagraphElement.innerHTML = "Big";
            numberComparisonParagraphElement.classList.remove("color-green");
            numberComparisonParagraphElement.classList.remove("color-yellow");
            numberComparisonParagraphElement.classList.add("color-red");
        }
        else if (numberInputElement.value < randomNumber){
            numberComparisonParagraphElement.innerHTML = "Small";
            numberComparisonParagraphElement.classList.remove("color-red");
            numberComparisonParagraphElement.classList.remove("color-green");
            numberComparisonParagraphElement.classList.add("color-yellow");
        }
        else if (numberInputElement.value == randomNumber){
            numberComparisonParagraphElement.innerHTML = "You Win!";
            numberComparisonParagraphElement.classList.remove("color-yellow");
            numberComparisonParagraphElement.classList.remove("color-red");
            numberComparisonParagraphElement.classList.add("color-green");
            numberInputElement.setAttribute("disabled", "");
            numberBtnElement.setAttribute("disabled", "");
        }
        guessNumberElement.innerHTML--
    }
    else {
        numberComparisonParagraphElement.innerHTML = "Invalid Input!";
        numberComparisonParagraphElement.classList.remove("color-green");
        numberComparisonParagraphElement.classList.remove("color-yellow");
        numberComparisonParagraphElement.classList.add("color-red");
    }
}
