let data = document.getElementById("value")
console.log(data)
let num = 0

function decrement() {
    if (num > 0) {
        num = num - 1
        data.innerText = num
    }
}

function increment() {
    num = num + 1
    data.innerText = num
}

function reset() {
    num = 0
    data.innerText = num
}
console.log(num)