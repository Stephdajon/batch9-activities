const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = [' chicharon', ' buko pie', ' mango', ' bacon' ]
const fridge = [' chocolate', ' ice-cream', ' yogurt', ' pork', ' chicken']

//Challenge: Please fill the fridge array with 5 items of your choice. 


//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.


//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
    if (fridge.length > 0) {
        var removelist = fridge.pop()
        buyList.push(removelist)
        buyListDisplay.innerHTML = buyList
        fridgeListDisplay.innerHTML = fridge
    }
    else {
        alert('Your fridge is empty!')
    }

    // if (fridge.length > 0) {
    //     var removelist = fridge.shift()
    //     buyList.unshift(removelist)
    //     buyListDisplay.innerHTML = buyList
    //     fridgeListDisplay.innerHTML = fridge
    // }
    // else {
    //     alert('Your fridge is empty!')
    // }
    
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
    if (buyList.length > 0) {
        var checklist = buyList.pop()
        fridge.push(checklist)
        buyListDisplay.innerHTML = buyList
        fridgeListDisplay.innerHTML = fridge
    }
    else {
        alert('All items are in the fridge!')
    }

    // if (buyList.length > 0) {
    //     var checklist = buyList.shift()
    //     fridge.unshift(checklist)
    //     buyListDisplay.innerHTML = buyList
    //     fridgeListDisplay.innerHTML = fridge
    // }
    // else {
    //     alert('All items are in the fridge!')
    // }
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge