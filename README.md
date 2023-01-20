# Mr. Robogers Neighborhood

#### Justin Lee

#### Website that takes in user input and returns an array of numbers that go from 0 to the user inputted number. It is then manipulated based off certain rules.

## Technologies Used

* JS
* Bootstrap
* HTML

## Description

This website takes user input and creates an array that returns numbers that go from 0 to the user input. I.e input 5 returns a [0,1,2,3,4,5]. It is then manipulated and changed to "beep" if it contains a 1, "boop" if it contains a 2, and "won't you be my neighbor" if it contains a 3. This manipulation is hierachal and containg a "3" takes priority of containg a 2. i.e "23" will be "won't you be my neighbor" and "12" will return boop instead of beep.

## Setup/Installation Requirements

* Push repository to your personal computer using gitbash or download it to your desktop by downloading repository of github.
* To open website, use any web browser that supports HTML.
* Input any number and press "submit house number" to see your neighbors!
* To see any JS or HTML code, use any source-code editor such as VSCode.

## Known Bugs

* N/a

## License

MIT

If you have any questions or comments, feel free to email me at justinurf@gmail.com

Copyright (c) 01/20/23


## TDD

Describe : myNeighbors(n)

Test : "It should return any number inputed by user to an array starting from 0."
Code : myNeighbors(5)
Expected Ouput: [0,1,2,3,4,5]

Test : "It should read this array and loop through it"
Code : for (i=0, i <= myNeighbors -1; i++) {

  console.log(myNeighbors[i])

}

Execpected Output:0, 1, 2, 3, 4, 5,

Test : "It should have if statement logics that checks whether or not it contains a 1, 2, or 3,"
Code : for... {
  
  if myNeighbors[i] has a 3{

  console.log("I have a 3 in me!")

  }
  else if myNeighbors[i] has a 2{

  console.log("I have a 2 in me")

  }

  else if ...

}

Expected Output : if the index[i] has 3, console log will say "I have a 3 in me!" if the index[i] has 2, the console log will say "I have a 2 in me!" Otherwise it will do nothing

Test : "It should once it checks what number is in the current index, to either take action or do nothing."
Code for... {

  if myNeighbors[i] has a 3 {

  replace index with string that says "Won't you be my neighbor?"

  }
  if myNeighbors[i] has a 2 {

  replace index with string that says "boop"

  }
}

Expected Output : finalArray [0, "beep", "boop", "Won't you be my neighbor," 4, 5, 6, 7, 8, 9, "beep", "boop", "won't you be my neighbor", "beep", "beep"]
