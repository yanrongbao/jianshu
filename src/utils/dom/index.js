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