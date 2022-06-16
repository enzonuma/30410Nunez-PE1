let minBid = 10
let welcome = prompt("Welcome to Xclusive Shoes, whats your name?")
let yourBid = parseInt(prompt(welcome + " what's your $Bid for those?"))
let confirm = prompt("$" + yourBid + " your Final Bid? ('Yes' / 'No' to stop )")

function toBuy() {

    while (confirm != "No") {

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

        yourBid = parseInt(prompt(welcome + " try another $Bid:"))
        confirm = prompt("$" + yourBid + " is your new Bid? (Yes / 'No' to stop)")
    }

    if (confirm != "No") {
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

    shippingZone = prompt("Where are you from?: (CL - AR - PE - BO - UR)")

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

debugger

toBuy()