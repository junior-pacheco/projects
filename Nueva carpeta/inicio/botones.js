
const urls = ["../DEVICE/device.html", "../LAN/lan.html", "../WIEGAND/wiegand.html", "../OUTPUT/output.html", "../INPUT/input.html",]

const buttons = document.querySelectorAll(".btn")

buttons.forEach((elemt, i) => {
    elemt.addEventListener('click', () => {
        window.location.href = urls[i]
    })
})
