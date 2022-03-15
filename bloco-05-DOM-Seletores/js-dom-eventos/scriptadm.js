document.querySelector('#header-container').style.backgroundColor = 'green'

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow'

document.querySelector('.emergency-tasks').style.backgroundColor = 'pink'

function titulosH () {
    // let captureH = document.querySelectorAll('h3');
    
    // for (h3 of captureH) {
    // style.backgroundColor = 'black'
    // }
    for (i = 0; i <= 3; i += 1) {
        document.querySelectorAll('h3')[i].style.backgroundColor = 'black'
    }
}

titulosH()
