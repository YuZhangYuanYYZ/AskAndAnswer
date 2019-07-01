function jQuery() {
    var _init = jQuery.prototype.init;
    //_init就是一个构造函数
    return new _init();
}
jQuery.prototype = {
    constructor: jQuery,
    length: 100,
    init: function () {
        //this可以访问到实例本身的属性，也可以访问到init.prototype中的属性
        //这里的init.prototype并不是jQuery.prototype
        console.log(this.height);
        //正确答案：undefined
        //100? 错误的
    }
}

//Ask:1) 这段代码是想实现什么功能  2)为什么最后打印是undefined?