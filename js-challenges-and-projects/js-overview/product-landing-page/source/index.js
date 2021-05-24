var contact = document.getElementById('contact')
contact.style.backgroundColor = 'pink'
contact.style.opacity = 0.8
var div = document.createElement('div')
var newDiv = document.createElement('button')
newDiv.textContent = 'Buy Now!'
newDiv.style.color = 'black'
newDiv.style.border = '2px'
newDiv.style.margin = '20px'
newDiv.style.padding = '15px 30px'
newDiv.style.borderRadius = '15px'
newDiv.setAttribute('id', 'contact-btn')

div.appendChild(newDiv)
contact.appendChild(div)

document.getElementById('contact-btn').addEventListener('click', sayBuyNow)

function sayBuyNow() {
    alert('Buy Now!')
}
document.getElementsByTagName('button')[1].style.backgroundColor = 'black'