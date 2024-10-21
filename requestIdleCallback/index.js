// 60fps
// 1000ms / 60 = 16.67ms

// 一帧 16.67ms
// 1. 处理用户事件，就是 event 列如：点击、滚动、拖拽等
// 2. 执行定时器任务
// 3. 执行 requestAnimationFrame
// 4. 执行 dom 的回流与重绘
// 5. 计算更新图层的绘制命令
// 6. 合成帧并显示在屏幕上
// 7. 浏览器空闲时执行 requestIdleCallback

// 第二种情况
// 没有任务执行，浏览器会有 50ms 的空闲时间，所以会执行 requestIdleCallback

// requestIdleCallback
// 1. requestIdleCallback(callback, {timeout: 1000})
// 2. callback: 在浏览器空闲时执行的回调函数
// 3. timeout: 超时时间，如果超时，回调函数会强制执行
// 4. 返回一个id，可以用来取消回调函数

// requestIdleCallback(callback, {timeout: 1000})

// 有空闲时间，执行回调函数
// 预加载事件
// requestIdleCallback((deadline) => {
//   console.log(deadline.timeRemaining());
// });

let { port1, port2 } = new MessageChannel();

port1.onmessage = (e) => {
  console.log("收到了port2的消息", e);
};

port2.onmessage = (e) => {
  console.log("收到了port1的消息", e);
};

port1.postMessage("来自port1的消息");

port2.postMessage("来自port2的消息");
