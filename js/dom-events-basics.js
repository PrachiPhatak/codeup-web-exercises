// Before coding up an event, let's get some dissection out of the way

//TODO: Event - the type of trigger that will fire off
//  -> click, dblclick, submit, hover, keyup, keydown, mouseover, mouseout, change, and many more!
//  -> https://developer.mozilla.org/en-US/docs/Web/Events

//TODO: Listener - what will *happen* when the event fires off
//  -> Can be whatever you want/need. For example:
//      -> On click, change the background color
//      -> On hover, a description pops up
//      -> On form submission, disable submit button
//      -> On form submission, display user inputs to the screen in a new element

// TODO: Putting it together
//  -> In order to add an event listener to a node, we follow a boilerplate process:
//      -> Pick your element(s) using your desired document method (getElementById, class, selector, selectorAll)
//      -> chain .addEventListener() on to the selected node(s) -> myNode.addEventListener()
//      -> pass two arguments to .addEventListener():
//          -> the type of event (as a string). "click", "hover", etc
//          -> the listener definition either as an inline function or a passed function definition
//      -> Wrap all of this in a function and call that function (your event won't fire unless it's actually called to be added, right?)

// TODO: Your function will end up looking something like this


/*
    function addEvent(){
        var myNode = document.getElementById("myId");
        myNode.addEventListener("click", getListener);
    }

    function getListener(){
        // make changes here
        // maybe append new element nodes, change style, add/remove text, etc
    }
*/


// We have talked about changing content/styles and adding/removing/altering elements in DOM

// Now, we need to think about WHEN and WHY we should make those changes

// In dom-events-basics.html, we have a Boostrap navbar.

// Perhaps the content in the body (below the navbar) should change when a user clicks a sus link

// setSuspectEvent();
//
// function setSuspectEvent() {
//     document.getElementById("sus")
//         .addEventListener("click", appendSusNode);
// }
//
// function appendSusNode() {
//     document.getElementById("sus-group")
//         .appendChild(getImageNode());
// }
//
// function getImageNode() {
//
//     let imageNode = document.createElement("img");
//     imageNode.setAttribute("src", "assets/images/sus.gif");
//     imageNode.setAttribute("class", "col-12 col-sm-6 col-md-4 px-0");
//     // imageNode.setAttribute("class", "col-12");
//
//     return imageNode;
// }


// TODO: comment out the above code and make your own events!
//  -> Document-specific events: https://developer.mozilla.org/en-US/docs/Web/API/Document#events
//  -> You must:
//      -> add at *least* one event and listener
//      -> when that event is fired, your listener should:
//          -> add at *least* one element to the page with content and styling
//  -> It will be helpful to use the bootstrap classes for your layout and styling in this case
//      -> Keeps you from getting bogged down on styling/layout
//  -> BONUS: Don't feel stifled by the above lesson examples
//      -> You can add more than one event to an element
//      -> You can add an event to many elements at once
//      -> You can add events to things other than element nodes (window, document, element, form, and more!)
//          -> Events across object models: https://developer.mozilla.org/en-US/docs/Web/Events
//

setElementEvent();

function setElementEvent() {
    document.getElementById("element")
        .addEventListener("click", addElementClickListener);
}

function addElementClickListener() {
    document.getElementById("element-group")
        .appendChild(getCalculatorNode());
    removeElementClickEvent();
}

function getCalculatorNode() {
    let calculatorNode = document.createElement("div");
    calculatorNode.innerHTML =
        `<div class="m-5 p-5">
            <h3 class="m-1 p-1">Calculator</h3>
            <form onsubmit="return false;">
                <div class="form-group m-1">
                    <input id="userInput" class="form-control col-8 col-lg-8 p-2 mb-2 text-right bg-light" type="float">
                </div>
                <div class="row  col-12 col-sm-12 col-lg-12">
                    <button id="buttonAC" onclick="getButtonValue('A')" value="A" type="button" class="col-2 btn bg-light  m-1">AC</button>
                    <button id="buttonPlus" onclick="getButtonValue('-1')" value="P" type="button" class="col-2 btn bg-light m-1">+/-</button>
                    <button id="buttonPercentage" onclick="getButtonValue('%')" value="%" type="button" class="col-2 btn bg-light m-1">%</button>
                    <button id="buttonDivision" onclick="getButtonValue('/')" value="/" type="button" class="col-2 btn bg-warning m-1">/</button>
                    <button id="buttonHidden1" type="button" value="" class="invisible col-2 btn btn-secondary m-1">Hidden
                    </button>
                    <button id="button7" onclick="getButtonValue('7')" value="7" type="button" class="col-2 btn btn-secondary m-1">7</button>
                    <button id="button8" onclick="getButtonValue('8')" value="8" type="button" class="col-2 btn btn-secondary m-1">8</button>
                    <button id="button9" onclick="getButtonValue('9')" value="9" type="button" class="col-2 btn btn-secondary m-1">9</button>
                    <button id="buttonMultiplication" onclick="getButtonValue('*')" value="*" type="button" class="col-2 btn bg-warning m-1">*</button>
                    <button id="buttonHidden2" type="button" class="invisible col-2 btn btn-secondary m-1">Hidden
                    </button>

                    <button id="button4" onclick="getButtonValue('4')" value="4" type="button" class="col-2 btn btn-secondary m-1">4</button>
                    <button id="button5" onclick="getButtonValue('5')" value="5" type="button" class="col-2 btn btn-secondary m-1">5</button>
                    <button id="button6" onclick="getButtonValue('6')" value="6" type="button" class="col-2 btn btn-secondary m-1">6</button>
                    <button id="buttonSubtraction" onclick="getButtonValue('-')" value="-" type="button" class="col-2 btn bg-warning m-1">-</button>
                    <button id="buttonHidden3" type="button" class="invisible col-2 btn btn-secondary m-1">Hidden
                    </button>

                    <button id="button1" onclick="getButtonValue('1')" value="1" type="button" class="col-2 btn btn-secondary m-1">1</button>
                    <button id="button2" onclick="getButtonValue('2')" value="2" type="button" class="col-2 btn btn-secondary m-1">2</button>
                    <button id="button3" onclick="getButtonValue('3')" value="3" type="button" class="col-2 btn btn-secondary m-1">3</button>
                    <button id="buttonAddition" onclick="getButtonValue('+')" value="+" type="button" class="col-2 btn bg-warning m-1">+</button>
                    <button id="buttonHidden4" type="button" class="invisible col-2 btn btn-secondary m-1">Hidden</button>

                    <button id="buttonHelp" onclick="getButtonValue('HELP')" value="?" type="button" class="col-2 btn btn-secondary m-1">?</button>
                    <button id="button0" onclick="getButtonValue('0')" value="0" type="button" class="col-2 btn btn-secondary m-1">0</button>
                    <button id="buttonDot" onclick="getButtonValue('.')" value="." type="button" class="col-2 btn btn-secondary m-1">.</button>
                    <button id="buttonEqual" onclick="getButtonValue('=')" value="=" type="submit" class="col-2 btn bg-warning m-1">=</button>
                </div>
            </form>
        </div>`;
    let elementLink = document.getElementById("element");
    return calculatorNode;
}

function removeElementClickEvent() {
    let element = document.getElementById("element");
    element.removeEventListener("click", addElementClickListener);
}









