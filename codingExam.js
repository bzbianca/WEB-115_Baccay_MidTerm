
const Button1 = document.getElementById("Button1")

const fixedInterest = .575
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
    while (newLoan !== 0) {
        counter += 1;
        let monthlyPayment = ((loanAmount * fixedInterest) / 1 - (1 + fixedInterest) ** -loanTerm).toFixed(2)
        let interestAmount = (loanAmount * fixedInterest / 12)
        let principalAmount = monthlyPayment - interestAmount
        let interestPaid = (loanAmount - monthlyPayment) * fixedInterest
        let principalPaid = (monthlyPayment - principalAmount)
        newLoan = newLoan - principalAmount

        let termMortgage = document.createElement("p")
        termMortgage.innerHTML("Month " + counter)
        
        let interestMortgage = document.createElement("p")
        interestMortgage.innerHTML(interestAmount)

        let amountMortgage = document.createElement("p")
        amountMortgage.innerHTML(newLoan + interestAmount)

        let Totalmortgage = document.createElement("p")
        Totalmortgage.innerHTML()


    }

}

