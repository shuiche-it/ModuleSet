/**
 * Created by Zach_Zhang on 2015/8/8.
 */
function mouseMove2 (bigObj,smallObj) {
    /*函数说明：
     * 此函数作用是在bigObj中鼠标移入后，smallObj会从左上角滑下；而且透明度也会变化
     * 在smallObj的css样式中必须指定transition属性；
     */
    bigObj.onmouseover = function () {
        smallObj.style.top =0 +'px';
        smallObj.style.opacity = 1;
        smallObj.style.filter = ('alpha(opacity' + 100+ ')')
    };

    bigObj.onmouseout = function () {
        smallObj.style.top = -smallObj.offsetHeight +'px';
        smallObj.style.opacity = 0;
        smallObj.style.filter = ('alpha(opacity' + 0+ ')')
    }
}