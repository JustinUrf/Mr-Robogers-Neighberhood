//Business Logic
function myNeighbors(nums){
  let numsArray = []
  for (i=0; i <= nums; i++){
    if (i.toString().index("3") > -1) {
      numsArray.push("Won't you be my neighbor");
    }
    numsArray.push(i)
  }
  // for (i=0; i <= numsArray.length -1; i++){
  //   if (numsArray[i].toString().indexOf("3") > -1) {
  //     numsArray[i] = "Won't you be my neighbor?"
  //   }
  //   else if (numsArray[i].toString().indexOf("2") > - 1) {
  //     numsArray[i] = "Boop!"
  //   }
  //   else if (numsArray[i].toString().indexOf("1") > - 1) {
  //     numsArray[i] = "Beep!"
  //   };
  // };
  // const theNewNeighborhood = numsArray.join(" ");
  // return theNewNeighborhood;
}

//UI logic
function handleFormSubmission() {
  event.preventDefault();
  const userNumber = document.getElementById("usernumber-input-id").value;
  const theNeighborhood = myNeighbors(userNumber);
  if (Number.isInteger(parseInt(userNumber))) {
    document.getElementById("user-house-number").innerText = userNumber;
    document.getElementById("final-neighborhood").innerText = theNeighborhood;
  }
  else {
    document.getElementById("user-house-number").innerText = "Error";
    document.getElementById("final-neighborhood").innerText = "Please Enter a valid Number";
  }

}

// Event Listener
window.addEventListener("load", function(){
  this.document.querySelector("form#robogers-neighborhood").addEventListener("submit", handleFormSubmission);
});