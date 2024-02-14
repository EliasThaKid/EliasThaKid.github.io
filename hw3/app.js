

function showMoney(num) {

    if ((num == null)||(num == NaN)) { return "NaN"; }

    if (num % 1 == 0) { 

        return (num.toString() + ".00"); 

    } else {

        formatNum = num * 10;

        if (formatNum % 1 == 0) { 

            return (num.toString() + "0"); 

        } else {

            num = Math.round(num*100);

            if (num % 100 == 0) {
                return ((num/100).toString() + ".00")
            } else if (num % 10 == 0) {
                return ((num/100).toString() + "0"); 
            } else {
                return ((num/100).toString());
            }

            
        }

    }    

}


function displayData(num1, num2, num3) {

    dogCost = 4.65 * num1
    dogDisplay = document.getElementById('htdg');
    dogText = "4.65 x " + num1 + " = $" + showMoney(dogCost);
    dogDisplay.textContent =  dogText;

    sodaCost = 1.89 * num2;
    sodaDisplay = document.getElementById('soda');
    sodaText = "1.89 x " + num2 + " = $" + showMoney(sodaCost);
    sodaDisplay.textContent =  sodaText;

    friesCost = 3.75 * num3;
    friesDisplay = document.getElementById('frnf');
    friesText = "3.75 x " + num3 + " = $" + showMoney(friesCost);
    friesDisplay.textContent =  friesText;

    subTotal = (4.65 * num1) + (3.75 * num2) + (1.89 * num3);
    subTotalDisplay = document.getElementById('subttl');
    subTotalText = "$ " + showMoney(subTotal);
    subTotalDisplay.textContent = subTotalText;

    discount = subTotal >= 25;

    discDisplay = document.getElementById('disc');
    discText = "";

    if (discount) {
        disc = subTotal * .1; 

        discText = "- $ " + showMoney(disc);
        
    } else {
        discText = "N/A"
    }

    discDisplay.textContent = discText;
    discountedTotal = discount ? subTotal * .9 : subTotal;

    taxamnt = discountedTotal * .0625; 
    taxDisplay = document.getElementById('txdt');
    taxText = "+ $ " + showMoney(taxamnt);
    taxDisplay.textContent = taxText;





    finalCost = discountedTotal * 1.0625;
    TotalDisplay = document.getElementById('total');
    TotalText = "$ " + showMoney(finalCost);
    TotalDisplay.textContent = TotalText;


}

numDogs = prompt("How many hot dogs do you want?");

numFries = prompt("How many sodas do you want?");

numSoda = prompt("How many fries do you want?");

displayData(numDogs, numSoda, numFries);


// test = prompt("test")

// let header = document.getElementById('test');

// testtxt = showMoney(test);

// // Set the text content of the header element to the value of the JavaScript variable
// header.textContent = testtxt;




