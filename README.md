# Incubation

Start reading in Incubator.js
  This file basically just does a little styling and deals with the dropdown to select your current restaurant.
  
Next comes Business.js.
  There is a lot of styling to begin with before getting into most of the logic which determines what happens when certain buttons are clicked.

Third is menu.js.
  menu.js is called immediately by Business.js to display the menu. Much of what Business.js does centers around actions taken here.
  
And lastly, orderConfirmation.js.
  When the user clicks the finish and pay button, they are taken here to review their order before confirming.
  This file handles most everything related to that.
  
The other files are rather uninteresting.



Main flaws that I've noticed:
  1. If you switch restaurants in the midst of an order, your order information comes along with you. Instead, it should reset all the information
     and start you out simply viewing the menu of that restaurant.
  2. The looks are a bit... lacking.
  3. You have to click the 'Pay Now' button twice for it to do anything.
