function moveDodgerLeft(){
    const leftNum = dodger.style.left.replace('px', '');
    const left = parseInt(leftNum, 10);

    if(left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNum = dodger.style.left.replace('px', '');
    const left = parseInt(leftNum, 10);

    if(left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}