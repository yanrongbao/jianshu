export const domRotate360deg = (dom) => {
    let originAngle = dom.style.transform.replace(/[^0-9]/gi, '');
    if (originAngle) {
        originAngle = Number.parseInt(originAngle, 10);
    } else {
        dom.style.cssText = `transform-origin:center center;transition:all 0.4s ease-in;display: block;float: left;`;
        dom.style.transition = `all 0.4s ease-in`;
        originAngle = 0;
    }
    dom.style.transform = `rotate(${originAngle + 360}deg)`;
}

//阻止浏览器的默认行为 
export const stopDefault = (e) => {
    //阻止默认浏览器动作(W3C) 
    if (e && e.preventDefault) {
        e.preventDefault()
    } else {
        window.event.returnValue = false;
    }
    return false;
}

//倒计时事件
export const countdownEvent = (time, callback) => {
    const timer = setInterval(() => {
        time--;
        callback(time)
        if (time === 0) {
            clearInterval(timer)
        }
    }, 1000)
}