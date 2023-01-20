//Business Logic
function myNeighbors(nums){
  let numsArray = []
  for (i=0; i <= nums; i++){
    numsArray.push(i)
  }
  for (i=0; i <= numsArray.length -1; i++){
    if (numsArray[i].toString().indexOf("3") > -1) {
      console.log("This number contains a 3");
      console.log(numsArray[i].toString());
    }
    else if (numsArray[i].toString().indexOf("2") > - 1) {
      console.log("This number contains a 2");
      console.log(numsArray[i].toString());
    }
    else if (numsArray[i].toString().indexOf("1") > - 1) {
      console.log("This number contains a 1");
      console.log(numsArray[i].toString());
    }
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