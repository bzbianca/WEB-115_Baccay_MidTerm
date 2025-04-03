
const Button1 = document.getElementById("Button1")

const fixedInterest = .0575
Button1.addEventListener("click", function() {
    let oldLoanAmount = Number(prompt("Enter the loan amount:"))
    let downpayment = Number(prompt("Enter the downpayment percentage (%):"))
    let loanAmount = Number(oldLoanAmount - (oldLoanAmount * downpayment / 100))
    let loanTerm = Number(prompt("Enter loan term:"))
    
    let payment = (calculate(loanAmount, fixedInterest, loanTerm))
    console.log(payment)
})

let counter = 0
function calculate(loanAmount, fixedInterest, loanTerm) { 
    let newLoan = loanAmount
    let display = document.createElement("p")
    display.innerHTML = "Loan Term: " + loanTerm + ", Annual Interest rate: " + fixedInterest + "Principal loan amount: " + loanAmount
    while (newLoan !== 0) {
        counter += 1;
        let principalAmount = monthlyPayment - interestAmount
        newLoan = newLoan - principalAmount
        let monthlyPayment = ((monthlyInterestRate * newLoan) / (1 - Math.pow(1 + monthlyInterestRate, -totalMonths))).toFixed(2);
        let interestAmount = (newLoan * fixedInterest / 12)
        let interestPaid = (newLoan - monthlyPayment) * fixedInterest
        let principalPaid = (monthlyPayment - principalAmount)
        let monthTerm = loanTerm * 12

        

        let displayCal = document.createElement("p")
        displayCal.innerHTML = "Monthly Payment: " + monthlyPayment + "Interest Paid: " + interestAmount + "Principal paid: " + principalPaid + "Remaining Loan: " + newLoan

        // let termMortgage = document.createElement("p")
        // termMortgage.innerHTML = ("Month " + counter + ", Interest Amount: " + interestAmount, )
        
        // let interestMortgage = document.createElement("p")
        // interestMortgage.innerHTML = (interestAmount)

        // let amountMortgage = document.createElement("p")
        // amountMortgage.innerHTML = (newLoan + interestAmount)

        // let Totalmortgage = document.createElement("p")
        // Totalmortgage.innerHTML = ()


    }

}

