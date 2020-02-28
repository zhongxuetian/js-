/* 规则 */
module.exports = {
    //用户名
    username(str){
        let re = /^[a-zA-Z0-9_]{6,12}$/
        return re.test(str);
    },
    //密码
    password(str){
        let re = /^[a-zA-Z0-9_]{6,12}$/
        return re.test(str);
    },
    //邮箱
    email(str){
        let re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return re.test(str);
    },
    //手机号
    phone(str){
        let re = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        return re.test(str);
    },
    //身份证
    id(str){
        let re = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        return re.test(str);
    },
    //是否包含中文
    isChinese(str){
        let re = /[\u4E00-\u9FA5]/;
        return re.test(str);
    },
    //qq号
    qq(str){
        let re = /^[1-9][0-9]{4,10}$/;
        return re.test(str);
    },
    //微信号
    wx(str){
        let re = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
        return re.test(str);
    }
}