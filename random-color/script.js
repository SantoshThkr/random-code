const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);

    const randomCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText=randomCode


    console.log(randomNumber,randomCode);
}

document.getElementById("col-change").addEventListener(
    "click",
    getcolor
)

getcolor();