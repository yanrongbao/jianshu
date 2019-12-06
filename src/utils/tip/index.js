export const throttle = (fn, interval = 500) => {
    let _self = fn,// 保存需要被延迟执行的函数引用
        timer,// 定时器
        firstTime = true;// 是否是第一次调用
    return function () {
        const args = arguments,
            _me = this;
        if (firstTime) {
            _self.apply(_me, args);
            return firstTime = false;
        }
        if (timer) {
            return false;
        }
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null;
            _self.apply(_me, args)
        }, interval)
    }
}