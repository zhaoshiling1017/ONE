/**
  author lenzhao
  email lenzhao@yahoo.com
  site https://www.lenzhao.com
*/

//A android like toast for android and ios, android use native toast, ios use UIView+Toast
import toast from '@remobile/react-native-toast';

function show(message) {
  toast.showShortBottom(message);
}

function showLong(message) {
  toast.showLongBottom(message);
}

export default {
  show,
  showLong
}
