//Business Logic
function myNeighbors(nums){

}





//UI logic
function handleFormSubmission() {
  event.preventDefault();
  const userNumber = document.getElementById("usernumber-input-id").value.
  const theNeighborhood = myNeighbors(userNumber);
  document.getElementById("user-house-number").innerText = userNumber;
}