const btn = document.querySelector(".btn");
const hexNumber = document.querySelector(".hex-number");

const getRandomColor = () => {
    let digits = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += digits[Math.floor(Math.random() * 16)];
    }

    return color;
};

const changeBackgroundColor = () => {
    document.body.style.backgroundColor = getRandomColor();
    hexNumber.innerText = getRandomColor();
};

btn.addEventListener("click", changeBackgroundColor);

window.onload = () => {
    changeBackgroundColor();
};
