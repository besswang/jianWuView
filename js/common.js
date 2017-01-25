/**
 * Created by wanglijuan on 16/10/14.
 */
$(function () {
    //懒加载
    $("img.lazy").lazyload({
        effect : "fadeIn",
        skip_invisible : false,// Lazy Load 默认忽略了隐藏图片. 如果你想要加载隐藏图片, 请将 skip_invisible 设为 false
        threshold : 200,// 设置 threshold 为 200 令图片在距离屏幕 200 像素时提前加载
        failure_limit : 10//当插件找到 10 个不在可见区域的图片时才停止搜索. 如果你有一个猥琐的布局, 请把这个参数设高一点
    });
})