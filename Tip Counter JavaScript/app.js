document.querySelector('#calculate-btn').addEventListener('click', (e) => {
    e.preventDefault();
    calculation();
});

const calculation = () => {
    const billAmount = Number(document.querySelector('#billAmount').value);
    const tipPercentage = Number(document.querySelector('#tipAmount').value);
    const totalAmount = document.querySelector('#totalAmount');

    if (billAmount && tipPercentage) {
        const tipAmount = Math.round(billAmount * (tipPercentage / 100));
        totalAmount.textContent = `$${tipAmount}`;
    } else {
        alertInfo();  // Call alertInfo if inputs are missing
    }
};

function alertInfo() {
    const alertInfo = document.querySelector("#alert-info");
    const alertInfoTxt = document.querySelector("#alert-info h5");
    
    // Show the alert and set the message
    alertInfo.style.display = "flex";
    alertInfoTxt.textContent = "Please Fill Both Inputs To Get Calculated";

    // Hide the alert after 3 seconds
    setTimeout(() => {
        alertInfo.style.display = "none";
    }, 3800);
}
