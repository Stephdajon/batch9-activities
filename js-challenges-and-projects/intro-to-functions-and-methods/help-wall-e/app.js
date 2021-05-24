const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.
var moveright = 0
function moveRobot() {
    //add code here
    moveright += 50
    robot.style.left = moveright

}
robot.addEventListener('click', moveRobot)