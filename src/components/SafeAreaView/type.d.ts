import { ViewProps } from '@tarojs/components/';
import { FC } from 'react';
import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';

export interface TaroSafeAreaViewProps {
  style?: object;
}

export type TaroSafeAreaViewType = FC<
  NativeSafeAreaViewProps & ViewProps
>;
