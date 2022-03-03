/**
 * Project name(项目名称)：JS_event
 * File name(文件名): t2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/3
 * Time(创建时间)： 20:55
 * Version(版本): 1.0
 * Description(描述)：
 * 事件    描述
 鼠标、键盘事件    onclick    点击鼠标时触发此事件
 ondblclick    双击鼠标时触发此事件
 onmousedown    按下鼠标时触发此事件
 onmouseup    鼠标按下后又松开时触发此事件
 onmouseover    当鼠标移动到某个元素上方时触发此事件
 onmousemove    移动鼠标时触发此事件
 onmouseout    当鼠标离开某个元素范围时触发此事件
 onkeypress    当按下并松开键盘上的某个键时触发此事件
 onkeydown    当按下键盘上的某个按键时触发此事件
 onkeyup    当放开键盘上的某个按键时触发此事件
 窗口事件    onabort    图片在下载过程中被用户中断时触发此事件
 onbeforeunload    当前页面的内容将要被改变时触发此事件
 onerror    出现错误时触发此事件
 onload    页面内容加载完成时触发此事件
 onmove    当移动浏览器的窗口时触发此事件
 onresize    当改变浏览器的窗口大小时触发此事件
 onscroll    当滚动浏览器的滚动条时触发此事件
 onstop    当按下浏览器的停止按钮或者正在下载的文件被中断时触发此事件
 oncontextmenu    当弹出右键上下文菜单时触发此事件
 onunload    改变当前页面时触发此事件
 表单事件    onblur    当前元素失去焦点时触发此事件
 onchange    当前元素失去焦点并且元素的内容发生改变时触发此事件
 onfocus    当某个元素获得焦点时触发此事件
 onreset    当点击表单中的重置按钮时触发此事件
 onsubmit    当提交表单时触发此事件


 1. 窗口事件
 窗口事件与浏览器窗口相关，并且只能与<body>标记一起应用。
 属性        值            描述
 onafterprint    script    在打印文档之后运行脚本
 onbeforeprint    script    在打印文档之前运行脚本
 onbeforeonload    script    在加载文档之前运行脚本
 onblur    script    当窗口失去焦点时运行脚本
 onerror    script    当错误发生时运行脚本
 onfocus    script    当窗口获得焦点时运行脚本
 onhashchange    script    当文档改变时运行脚本
 onload    script    当文档加载时运行脚本
 onmessage    script    当触发消息时运行脚本
 onoffline    script    当文档离线时运行脚本
 ononline    script    当文档上线时运行脚本
 onpagehide    script    当窗口隐藏时运行脚本
 onpageshow    script    当窗口可见时运行脚本
 onpopstate    script    当窗口历史记录改变时运行脚本
 onredo    script    当文档执行再执行操作（redo）时运行脚本
 onresize    script    当调整窗口大小时运行脚本
 onstorage    script    当 Web Storage 区域更新时（存储空间中的数据发生变化时）运行脚本
 onundo    script    当文档执行撤销时运行脚本
 onunload    script    当用户离开文档时运行脚本

 2. 表单事件
 表单事件在 HTML 表单中触发（适用于所有 HTML 标签，但该标签需定义在 form 表单内）
 属性        值        描述
 onblur    script    当元素失去焦点时运行脚本
 onchange    script    当元素改变时运行脚本
 oncontextmenu    script    当触发上下文菜单时运行脚本
 onfocus    script    当元素获得焦点时运行脚本
 onformchange    script    当表单改变时运行脚本
 onforminput    script    当表单获得用户输入时运行脚本
 oninput    script    当元素获得用户输入时运行脚本
 oninvalid    script    当元素无效时运行脚本
 onreset    script    当表单重置时运行脚本，HTML 5 不支持
 onselect    script    当选取元素时运行脚本
 onsubmit    script    当提交表单时运行脚本

 3. 键盘事件
 键盘事件是当用户操作键盘时触发的事件：
 属性        值        描述
 onkeydown    script    当按下按键时运行脚本
 onkeypress    script    当按下并松开按键时运行脚本
 onkeyup    script    当松开按键时运行脚本

 4. 鼠标事件
 鼠标事件表示通过鼠标触发的事件：

 属性        值            描述
 onclick    script    当单击鼠标时运行脚本
 ondblclick    script    当双击鼠标时运行脚本
 ondrag    script    当拖动元素时运行脚本
 ondragend    script    当拖动操作结束时运行脚本
 ondragenter    script    当元素被拖动至有效的拖放目标时运行脚本
 ondragleave    script    当元素离开有效拖放目标时运行脚本
 ondragover    script    当元素被拖动至有效拖放目标上方时运行脚本
 ondragstart    script    当拖动操作开始时运行脚本
 ondrop    script    当被拖动元素正在被拖放时运行脚本
 onmousedown    script    当按下鼠标按钮时运行脚本
 onmousemove    script    当鼠标指针移动时运行脚本
 onmouseout    script    当鼠标指针移出元素时运行脚本
 onmouseover    script    当鼠标指针移至元素之上时运行脚本
 onmouseup    script    当松开鼠标按钮时运行脚本
 onmousewheel    script    当转动鼠标滚轮时运行脚本
 onscroll    script    当滚动元素的滚动条时运行脚本

 5. 剪贴板事件
 与剪贴板有关的事件，即复制、剪切和粘贴
 属性        值    描述
 oncopy    script    当从文档中复制某个元素时触发
 oncut    script    当从文档中剪切某个元素时触发
 onpaste    script    当用户向文档中粘贴数据时触发

 6. 多媒体事件
 通过视频（videos）、图像（images）或者音频（audio） 触发该事件，多应用于 HTML 中的媒体标签，例如<audio>、<embed>、<img>、<object>和 <video>等
 属性        值        描述
 onabort    script    当媒体文件播放中止时运行脚本
 oncanplay    script    当准备播放媒体文件时运行脚本
 oncanplaythrough    script    当媒体文件能够流畅播放（无需缓冲和停止即可播放至结尾）时运行脚本
 ondurationchange    script    当媒体文件长度改变时运行脚本
 onemptied    script    当媒体资源突然为空时（网络错误、加载错误等）运行脚本
 onended    script    当媒体文件播放结束时运行脚本
 onerror    script    当媒体文件加载期间发生错误时运行脚本
 onloadeddata    script    当加载媒体文件时运行脚本
 onloadedmetadata    script    当加载媒体文件元数据时运行脚本
 onloadstart    script    当浏览器开始加载媒体文件时运行脚本
 onpause    script    当暂停播放时运行脚本
 onplay    script    暂停后，当再次播放时运行脚本
 onplaying    script    当媒体文件正在播放时运行脚本
 onprogress    script    当浏览器正在获取媒体文件数据时运行脚本
 onratechange    script    当改变媒体文件的播放速率时运行脚本
 onreadystatechange    script    当就绪状态（ready-state）改变时运行脚本
 onseeked    script    当 seek 操作结束并且 seek 属性设置为 false 时运行脚本
 onseeking    script    当 seek 操作处于活动状态并且 seek 属性设置为true时运行脚本
 onstalled    script    当取回媒介数据过程中（延迟）存在错误时运行脚本
 onsuspend    script    当浏览器意外停止读取媒体文件的数据时运行脚本
 ontimeupdate    script    当调整播放进度（快进、快退）时运行脚本
 onvolumechange    script    当改变媒体文件的播放音量或将音量设置为静音时运行脚本
 onwaiting    script    当暂停播放或等待加载更多数据时运行脚本

 7. 其他事件
 属性          值        描述
 onshow    script    当 <menu> 标签在上下文显示时触发
 ontoggle    script    当用户打开或关闭 <details> 标签时触发
 */

function sayHello()
{
    alert('Hello World!');
}

document.getElementById("b").onclick = sayHello;