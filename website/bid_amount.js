function submitForm(event, bidId) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const amountInput = document.getElementById('amount');
  
  // Get the current bid value from the input
  const currentBid = parseInt(amountInput.value);

  // Retrieve the current bid history or initialize it if not present
  let bids = JSON.parse(localStorage.getItem('bids')) || {};
  let bidHistory = bids[bidId] || [];
  
  // Add the new bid to the history
  bidHistory.push({
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      amount: currentBid,
      timestamp: new Date().toISOString()
  });

  // Save the updated history back to local storage
  bids[bidId] = bidHistory;
  localStorage.setItem('bids', JSON.stringify(bids));

  // Check if the current bid is higher than the stored highest bid
  let storedBid = localStorage.getItem(bidId);
  if (storedBid === null) {
      storedBid = 0;
  } else {
      storedBid = parseInt(storedBid);
  }
  
  if (currentBid > storedBid) {
      // Store the new highest bid value for the corresponding image
      localStorage.setItem(bidId, currentBid);

      // Update the displayed bid on the page
      const bidElement = document.getElementById(bidId);
      bidElement.textContent = currentBid;

      // Optionally display a success message to the user
      alert("Thank you for your bid! New highest bid is now: " + currentBid);
  } else {
      // Optionally inform the user their bid was not high enough
      alert("Your bid of " + currentBid + " is not higher than the current highest bid of " + storedBid + ".");
  }
}