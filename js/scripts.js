//Business Logic
function myNeighbors(nums){
  let numsArray = []
  for (i=0; i <= nums; i++){
    numsArray.push(i)
  }
  console.log(numsArray)
}





//UI logic
function handleFormSubmission() {
  event.preventDefault();
  const userNumber = document.getElementById("usernumber-input-id").value;
  const theNeighborhood = myNeighbors(userNumber);
  document.getElementById("user-house-number").innerText = userNumber;
  document.getElementById("final-neighborhood").innerText = theNeighborhood;
}

// Event Listener
window.addEventListener("load", function(){
  this.document.querySelector("form#robogers-neighborhood").addEventListener("submit", handleFormSubmission);
});