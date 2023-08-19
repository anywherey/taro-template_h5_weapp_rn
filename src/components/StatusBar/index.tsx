import { View } from '@tarojs/components';
import { isAndriod } from '@/utils/acrossApi';

let StatusBar: any;
if (process.env.TARO_ENV === "rn" && isAndriod()) {
  StatusBar = require('react-native').StatusBar;
}

export default function TaroStatusBar(props: any) {
  return StatusBar ? (
    <StatusBar {...props} />
  ) : (
    <View style={{ display: 'none' }} />
  );
}
