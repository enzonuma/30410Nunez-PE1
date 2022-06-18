// let welcome = alert("Welcome to Xclusive Shoes!")
let myShoes = []
let myClothes = []
let myAcce = []
let congratstext = ""

function crearId() {
    return parseInt(Math.random() * 100)
}

function congrats() {
    congratstext = prompt("Your products were added succesfully! Do you want to add another ones? (YY / NN to close)")

    while (congratstext != "NN") {
        switch (congratstext) {
            case "YY":
                addProduct();
                congrats();
                break;

            default:
                alert("Please enter an option");
                return congrats();
                // congratstext = prompt("Your products were added! Do you want to add another ones? (Y / N to close");
                // addProduct();
                break;
        }
    }

    if (congratstext == "NN") {
        let thankYou = alert("Thank you for visit us! Here are your products, good luck!");
        const allProducts = myShoes.concat(myClothes, myAcce);
        console.table(allProducts);
    }
}

function addProduct() {
    class Producto {
        constructor(sku, productType, productName, minBid) {
            this.sku = sku
            this.productName = productName
            this.minBid = parseInt(minBid)
            this.productType = productType
        }
    }

    productType = prompt("Do you want to add: Shoe | Clothes | Accesories ?")

    switch (productType) {

        case "Shoe":
            productName = prompt("Enter the shoes Model/Name:");
            minBid = prompt("Enter the min. $Bid:");
            sku = crearId();
            myShoes.push(new Producto(sku, productType, productName, minBid));
            break;

        case "Clothes":
            productName = prompt("Enter the Clothes Model/Name:");
            minBid = prompt("Enter the min. $Bid:");
            sku = crearId();
            myClothes.push(new Producto(sku, productType, productName, minBid));
            break;

        case "Accesories":
            productName = prompt("Enter the Accesorie Model/Name:");
            minBid = prompt("Enter the min. $Bid:");
            sku = crearId();
            myAcce.push(new Producto(sku, productType, productName, minBid));
            break;

        default:
            alert("Enter a correct category");
            return addProduct();
    }
}

const btnSell = document.querySelector("#yourSales")
btnSell.addEventListener("click", () => {
    addProduct()
    congrats()
})