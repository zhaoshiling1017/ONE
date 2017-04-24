# 基于React-Native的高仿「ONE·一个」

> [「ONE·一个」](http://www.wandoujia.com/apps/one.hh.oneclient)是由韩寒监制，原《独唱团》主创成员共同制作的一款文艺生活APP

>  支持设备: Android 4.1+ and iOS 8.0+

## 整体思路
1. 分析「ONE·一个」App的业务逻辑结构，将整体业务按重要程度进行划分，安排整体开发流程
2. 使用官方的Navigator管理全局路由，可自由配置Scene的出场动画，处理Android端的后退键事件
3. 使用FlexBox和jsx语法进行布局，并封装了一系列通用的组件，比如GridView、带上下拉功能的ListView、ImageViewer等，便于全局复用
4. 在Android原生端实现音频播放功能，并导出Native Api给React Native使用
5. 导入Video Native Api，自定义界面并实现电影预告片的加载播放
6. 导入GitHub第三方库react-native-wechat实现图文、阅读、音乐、电影的微信分享
7. 处理了App加载网络数据时的各种状态，比如加载中、加载成功、加载失败、点击屏幕重新进行加载等
8. 使用InteractionManager，保证每个页面都在转场动画结束时才进行耗时操作，使得切换页面时不卡顿，尽量减少View的层级，优化渲染性能
9. 在深刻理解的前提下引入redux相关功能，包括redux/react-redux/redux-thunk/redux-logger，设计与音频相关的全局state结构，使用redux管理与音频state相关的组件

## Build
1. clone this repo
2. npm install
3. react-native run-android or react-native run-ios

## 第三方库
1. [redux](https://github.com/reactjs/redux)
2. [react-redux](https://github.com/reactjs/react-redux)
3. [redux-thunk](https://github.com/gaearon/redux-thunk)
4. [redux-logger](https://github.com/evgenyrodionov/redux-logger)
5. [react-native-video](https://github.com/react-native-community/react-native-video)
6. [react-native-toast](https://github.com/remobile/react-native-toast)
7. [react-native-wechat](https://github.com/weflex/react-native-wechat)
8. [react-native-orientation](https://github.com/yamill/react-native-orientation)
9. [react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)
10. [lipeiwei-szu/react-native-viewpager](https://github.com/lipeiwei-szu/react-native-viewpager)  which is fork [race604/react-native-viewpager](https://github.com/race604/react-native-viewpager)
11. [react-native-simple-store](https://github.com/search?utf8=%E2%9C%93&q=react-native-simple-store)
