Answer
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById select only one element using id, its return a single elements or null.

getElementByClass select elements using class name, its return a collection of HTML, it always return a list.

querySelector select first matching element and querySelectorAll select all matching elements, it uses id, class etc. to find elements. Return NodeList of elements.

2. How do you create and insert a new element into the DOM?

To create an element first we need to find the the parent where we will insert the element. Then using document.createElement('p') create the p element, then we insert the content using .innerText method, after that we use appendChild() to insert the element into parent.

3. What is Event Bubbling? And how does it work?

The event Bubbling means adding an event to a child that also triggered its parent element, For example if div2 is child of div1, div1 and div2 have buttons. if we add event listener to these two div’s and add console log for checking then if we click div2 button then it first executed itself then div1, this is happen because of event bubbling. Event Bubbling checks the data that has triggered, if that have any parent it call that automatically and if that has another parent that calls too.

4. What is Event Delegation in JavaScript? Why is it useful?

The event delegation is method that is used a single eventlistener in a parent instead of having more event in the childs. It is very usefull because it reduces event handler, and make code more readable.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stop default behavior of an element.It stop opening link of anchor tag submitting form from a form.

stopProgation() method stop event bubbling, event bubble through child element to parent element, if needed to stop that this method is stop the bubbling of event.
