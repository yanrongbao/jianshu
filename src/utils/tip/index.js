export const throttle = (...arg) => {
    let canRun = true;
    const time = arg.pop();
    const fn = arg.shift()
    return function () {
        if (!canRun) return false;
        canRun = false;
        const timer = setTimeout(() => {
            fn.apply(this, arg)
            canRun = true
            clearTimeout(timer)
        }, time)
    }
}