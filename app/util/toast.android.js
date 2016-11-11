/**
  author lenzhao
  email lenzhao@yahoo.com
  site https://www.lenzhao.com
*/

import {
  ToastAndroid
} from 'react-native'

function show(message) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}

function showLong(message) {
  ToastAndroid.show(message, ToastAndroid.LONG);
}

export default {
  show,
  showLong
}
