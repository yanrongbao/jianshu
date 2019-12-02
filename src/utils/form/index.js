const strategies = {
    isNonEmpty(value, errorMsg) {
        if (value === '') {
            return errorMsg;
        }
    },
    minLength(value, length, errorMsg) { // 限制最小长度
        if (value.length < length) {
            return errorMsg;
        }
    },
    isMobile(value, errorMsg) { // 手机号码格式
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        }
    }
}

export class Validator {
    constructor() {
        this.cache = []; // 保存校验规则
    }
    add(dom, rules) {
        const self = this;
        for (let i = 0; i < rules.length; i++) {
            (function (rule) {
                var strategyAry = rule.strategy.split(':');
                var errorMsg = rule.errorMsg;
                self.cache.push(() => {
                    const strategy = strategyAry.shift();
                    strategyAry.unshift(dom.value);
                    strategyAry.push(errorMsg);
                    return strategies[strategy].apply(dom, strategyAry)
                })
            })(rules[i])
        }

    }
    start() {
        for (let i = 0; i < this.cache.length; i++) {
            let errorMsg = this.cache[i]();
            if (errorMsg) {
                return errorMsg;
            }
        }
    }
}