# Note Taker

## Description
Server based application to take notes to organize the though process and keep on track.

## Heroku Link
https://radiant-stream-14965.herokuapp.com/

### Description of Development
This project connected provided front end code to back end code that I created using Node.js and Express.js. I used jest to perform TDD, and then posted the result to Heroku.
I also hooked up the delete functionality, a bonus requirement. 

### Problems I ran into and Fixed
For a while the delete button wouldn't delete the first note. Traced the issue to the fact that "0" is considered not truthy, and as such it was being caught as not a note, and thus was spared deletion. There was also an issue that was created by adding indices based on the number of elements in the note array. I found a solution in grabbing the highest index and adding one to it to create new indices