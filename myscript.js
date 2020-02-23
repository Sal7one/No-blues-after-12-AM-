//Get date and hours
var date = new Date();
var hours = date.getHours();
var found = false;

//Between 12 AM and 6 AM  no blues for you :(( 
if (hours > 0 && hours < 6) {


    //Call this function 
    Searchforblues(document.body)

    //Recursive function that looks for every elemnt 
    function Searchforblues(element) {

        //If the document has a child then get it's child! 
        if (element.hasChildNodes() && !found) {

            //Callback the function with the new child of a child
            element.childNodes.forEach(Searchforblues)

            //If you do make it to the laast child, check if child is text
        } else if (element.nodeType === Text.TEXT_NODE) {
            //Check if the text content of the child has blues in it!
            if (element.textContent.match(/blues/gi)) {
                //Do whatever you want to stop yourself from falling in love and listenting to blues.
                found = true;
                alert("No blues for you! Get some sleep, Here's some rain to make you chill :D");
                window.location.href = 'https://rainymood.com/';
            }
        }
    }

}
