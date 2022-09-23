// document.getElementById("myButton").addEventListener("click", ()=>{
//     window.location.href = "/index.html"

// });



const urls = ["index1.html","index2.html"]

const buttons = document.querySelectorAll(".btn")

buttons.forEach((elemt, i) => {
    elemt.addEventListener('click', () => {
        window.location.href = urls[i]
    })
})