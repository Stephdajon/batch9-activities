let quotesDisplay = document.getElementById('quotesDisplay')
let inputName = document.getElementById('username');
let entryLabel = document.getElementById('label');
let btnSubmit = document.getElementById('submit');
let idInput = document.getElementById('input');
let name = document.querySelector('.name');
let greet = document.querySelector('.greet')
let mainFocus = document.getElementById('mainFocus');
let inputFocus = document.querySelector('.inputFocus');
let inputFocusId = document.querySelector('#inputFocus');
let quoteBtns = document.querySelector('.quoteBtns');
let focusHeader = document.getElementById('focusHeader');


//greet user
function nameInput() {
   let inputNameDisplay = inputName.value;
   let greetings = document.getElementById('greetingDisplay');
   

    var myDate = new Date();
    var hrs = myDate.getHours();

    if (hrs < 12)
        greet = 'Good Morning,';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon,';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening,';

    if (inputNameDisplay.length === 0) {
        alert('Enter your name!');
        greetings.innerText.style.display = 'none';
            } else {
                entryLabel.textContent = greet;
                name.textContent = inputNameDisplay + "!";
                
            }
    tDcontainer.style.display = 'flex';
    toDoBtn.style.display = 'block';
    toDo_List.style.display = 'block';
    inputFocusId.style.display = 'block';
    idInput.style.display = 'none';
    btnSubmit.style.display = 'none';
    postQuote.style.display = 'grid';
    quoteBtns.style.display = 'block';

}

btnSubmit.addEventListener('click', nameInput);

inputName.addEventListener("keyup", function(event){
    if(event.which === 13){
        nameInput();
    }

})

//greet user end


//main focus
function createFocus() {
    let focusValue = inputFocus.value;
    if (focusValue.length === 0) {
        alert('Write your main focus!');
    } else {
    var focus = document.createElement('h1');
    focus.setAttribute('id','focusMain');
    focus.setAttribute("contenteditable", "true");
    focus.appendChild(document.createTextNode(inputFocus.value));
    mainFocus.appendChild(focus);
    inputFocusId.style.display = 'none';
    focusHeader.style.display = 'block';
    // inputFocus.style.overflow-wrap = “break-word”
    }
}
    
inputFocus.addEventListener("keyup", function(event){
    if(event.which === 13) {
        createFocus();
    }
})
//main focus end

//Remove add line on enter while editting.
name.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    } if (event.keyCode === 13 && name.textContent.length === 0) {
        name.textContent = "Enter Name";
    }
});

mainFocus.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    } if (event.keyCode === 13 && mainFocus.textContent.length === 0) {
        focusMain.textContent = "Enter Main Focus";
    }
});

name.addEventListener("blur", function() {
    if (name.textContent.length === 0){
        name.textContent = "Enter Name";
    }
})

focusHeader.addEventListener("click", () => {
    focusMain.focus();
})

