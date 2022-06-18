let minBid = 0
let yourName = ""
let yourBid = 0
let confirmBid = ""
let shippingZone = ""

function toBuy() {

    minBid = 10
    yourName = prompt(`"Welcome to Xclusive Shoes, whats your name?"`)
    shippingZone = prompt(`Where are you from?: (CL - AR - PE - BO - UR)`).toUpperCase()
    yourBid = parseInt(prompt(`${yourName} what is your $Bid for these product?`))
    confirmBid = prompt(`Is $${yourBid} your final Bid? ('YY' / 'NN' to stop )`)

    while (confirmBid != "NN") {

        if (yourBid >= minBid) {
            alert("Those shoes are yours")
            break;
        } else if (yourBid >= minBid % 0.8) {
            alert("Try harder! You are close!")
        } else if (yourBid <= minBid & 0.5) {
            alert("Better next time")
        } else {
            alert("Please enter a $Bid or number")
        }

        yourBid = parseInt(prompt(yourName + " try another $Bid:"))
        confirmBid = prompt("$" + yourBid + " is your new Bid? (YY / 'NN' to stop)")
    }

    if (confirmBid != "NN") {
        shippingCost()
        lastMessage = alert("Final cost $" + finalCost)
        despedida = alert("Thanks for visit us!")

    } else {
        despedida = alert("Thanks for visit us!")
    }

}

const ivaCL = 1.19
const ivaAR = 1.21
const ivaPE = 1.18
const ivaBO = 1.13
const ivaUR = 1.22
let shippingFee = 0
let finalCost = 0

function shippingCost() {

    switch (shippingZone) {
        case "CL":
            alert("The shipping cost will be $" + parseInt(yourBid * ivaCL))
            shippingFee = parseInt(yourBid * ivaCL)
            finalCost = parseInt(yourBid + shippingFee)
            break;

        case "AR":
            alert("The shipping cost will be $" + parseInt(yourBid * ivaAR))
            shippingFee = parseInt(yourBid * ivaAR)
            finalCost = parseInt(yourBid + shippingFee)
            break;

        case "PE":
            alert("The shipping cost will be $" + parseInt(yourBid * ivaPE))
            shippingFee = parseInt(yourBid * ivaPE)
            finalCost = parseInt(yourBid + shippingFee)
            break;

        case "BO":
            alert("The shipping cost will be $" + parseInt(yourBid * ivaBO))
            shippingFee = parseInt(yourBid * ivaBO)
            finalCost = parseInt(yourBid + shippingFee)
            break;

        case "UR":
            alert("The shipping cost will be $" + parseInt(yourBid * ivaUR))
            shippingFee = parseInt(yourBid * ivaUR)
            finalCost = parseInt(yourBid + shippingFee)
            break;

        default:
            shippingZone = prompt("This area is not covered, enter one of the following (CL - AR - PE - BO - UR)")
            return shippingCost();

    }
}

const btnBuy = document.querySelector("#startBuy")
btnBuy.addEventListener("click", () => {
    toBuy()
})