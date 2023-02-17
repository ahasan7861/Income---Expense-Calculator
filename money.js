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



    // if(isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)){
    //    const warning = alert("please enter the number type value");
    //    return warning;
       
    // }

    // else if(income <= 0 || food <= 0 || rent <= 0 || clothes <= 0){
    //     const warning = alert("please input positive number");
    //     return warning;
    // }


    

    

    


   
    const totalExpence = food + rent + clothes;
    // if(income < totalExpence){
    //     const warning = alert("your expense is grater than your income");
    //     return warning;
    // }
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






