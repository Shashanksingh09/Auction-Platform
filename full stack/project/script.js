let highestBid = 1000;
let highestBidder = "None";

function placeBid() {
  const bidderName = document.getElementById("bidder-name").value.trim();
  const bidAmount = parseInt(document.getElementById("bid-amount").value);

  const message = document.getElementById("message");

  if (!bidderName || isNaN(bidAmount)) {
    message.textContent = "Please enter a valid name and bid amount.";
    return;
  }

  if (bidAmount <= highestBid) {
    message.textContent = "Your bid must be higher than the current highest bid!";
    return;
  }

  highestBid = bidAmount;
  highestBidder = bidderName;

  document.getElementById("highest-bid").textContent = highestBid;
  document.getElementById("highest-bidder").textContent = highestBidder;
  message.textContent = "Bid placed successfully!";
  message.style.color = "green";

  // Reset input
  document.getElementById("bidder-name").value = "";
  document.getElementById("bid-amount").value = "";
}
