document.addEventListener('DOMContentLoaded', function() {
    // Set default Nisab Value to Silver Standard when page loads
    let nisabValue = 489.88;
    document.getElementById('nisabValue').textContent = nisabValue.toFixed(2);

    // Listen for changes to the Nisab Standard selection
    document.getElementById('nisabStandard').addEventListener('change', function() {
        const nisabStandard = this.value;
        if (nisabStandard === 'silver') {
            nisabValue = 489.88; // Silver standard value
        } else {
            nisabValue = 5927.; // Gold standard value
        }
        document.getElementById('nisabValue').textContent = nisabValue.toFixed(2);
    });
});

function calculateZakat() {
    // Get form values
    const nisabStandard = document.getElementById('nisabStandard').value;
    const cashOnHand = parseFloat(document.getElementById('cashOnHand').value) || 0;
    const bankBalance = parseFloat(document.getElementById('bankBalance').value) || 0;
    const resaleShares = parseFloat(document.getElementById('resaleShares').value) || 0;
    const resaleProperty = parseFloat(document.getElementById('resaleProperty').value) || 0;
    const retirementPlans = parseFloat(document.getElementById('retirementPlans').value) || 0;
    const businessInventory = parseFloat(document.getElementById('businessInventory').value) || 0;
    const goldJewelry = parseFloat(document.getElementById('goldJewelry').value) || 0;
    const goldBullion = parseFloat(document.getElementById('goldBullion').value) || 0;
    const debtsOwed = parseFloat(document.getElementById('debtsOwed').value) || 0;
    const accountsReceivable = parseFloat(document.getElementById('accountsReceivable').value) || 0;

    // Calculate Total Assets
    const totalAssets = cashOnHand + bankBalance + resaleShares + resaleProperty + retirementPlans +
                        businessInventory + goldJewelry + goldBullion + debtsOwed + accountsReceivable;
    document.getElementById('totalAssets').textContent = totalAssets.toFixed(2);

    // Get Liabilities
    const shortTermDebts = parseFloat(document.getElementById('shortTermDebts').value) || 0;
    const longTermDebts = parseFloat(document.getElementById('longTermDebts').value) || 0;
    const incurredExpenses = parseFloat(document.getElementById('incurredExpenses').value) || 0;
    const wagesDue = parseFloat(document.getElementById('wagesDue').value) || 0;

    // Calculate Total Liabilities
    const totalLiabilities = shortTermDebts + longTermDebts + incurredExpenses + wagesDue;
    document.getElementById('totalLiabilities').textContent = totalLiabilities.toFixed(2);

    // Calculate Total Zakatable Amount
    const totalZakatable = totalAssets - totalLiabilities;
    document.getElementById('totalZakatable').textContent = totalZakatable.toFixed(2);

    // Determine Zakat obligation
    const nisabValue = parseFloat(document.getElementById('nisabValue').textContent);
    let zakatAmount = 0;
    let zakatMessage = "";
    if (totalZakatable >= nisabValue) {
        zakatAmount = totalZakatable * 0.025;
        zakatMessage = `Your Zakat: $${zakatAmount.toFixed(2)}`;
    } else {
        zakatMessage = "You are not obligated to pay Zakat.";
    }
    document.getElementById('zakatAmount').textContent = zakatAmount.toFixed(2);
    document.getElementById('zakatMessage').textContent = zakatMessage;
}
