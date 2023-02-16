let income
let food
let rent
let clothes 
document.getElementById("calculate-btn").addEventListener("click", function(){

    const incomeValue = document.getElementById("income").value;
    income = parseFloat(incomeValue);
    const foodValue = document.getElementById("food").value;
    food = parseFloat(foodValue);

    const rentValue = document.getElementById("rent").value;
    rent = parseFloat(rentValue);

    const clothesValue = document.getElementById("clothes").value;
    clothes = parseFloat(clothesValue);

    // if(food != Number && rent != Number && clothes != Number){
    //     alert("please enter the number");
    // }


   
    const totalExpence = food + rent + clothes;
   document.getElementById("total-expense").innerText = totalExpence;




    const totalBalance = income - totalExpence;
   document.getElementById("balance").innerText = totalBalance;

    
    
 document.getElementById("income").value = "";
 document.getElementById("food").value = "";
 document.getElementById("rent").value = "";
 document.getElementById("clothes").value = "";
})






let savings
let totalBalance
function calculateSavings(){
    const savingsValue = document.getElementById("save").value;
    savings = parseFloat(savingsValue);
    
    const savingsvalueFinal = (income / 100) * savings;
    document.getElementById("saving-amount").innerText = savingsvalueFinal;




    const totalBalanceValue = document.getElementById("balance").innerText;
    totalBalance = parseFloat(totalBalanceValue);


    const remainingBalance = totalBalance - savingsvalueFinal;

    document.getElementById("remaining-balance").innerText = remainingBalance;

    document.getElementById("save").value = "";

}






