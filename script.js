const length = document.getElementById("length");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", () => {
    const pwLength = +length.value;

    result.innerText = generatePW(pwLength);
});

let pwElements = {
    num: getRandomNumber,
    low: getRandomLowerLetter,
    up: getRandomUpperLetter,
    spec: getRandomSpecialChar
};

// Generate Password
function generatePW(length) {
    let genPW = "";

    // Loop over our 'length' and return a random item from the below functions
    for (let i = 0; i < length; i++) {
        genPW += pwElements[
            Object.keys(pwElements)[
                Math.floor(Math.random() * Object.keys(pwElements).length)
            ]
        ]();
    }

    return genPW;
}

// Random number
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

// Random lowercase letter
function getRandomLowerLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

// Random uppercase letter
function getRandomUpperLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

// Random special character
function getRandomSpecialChar() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
