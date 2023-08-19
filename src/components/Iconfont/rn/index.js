/* eslint-disable */

import React from 'react';

import IconSwap from './IconSwap';
import IconSousuo from './IconSousuo';
import IconArrowRight from './IconArrowRight';
import IconArrowLift from './IconArrowLift';
export { default as IconSwap } from './IconSwap';
export { default as IconSousuo } from './IconSousuo';
export { default as IconArrowRight } from './IconArrowRight';
export { default as IconArrowLift } from './IconArrowLift';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'swap':
      return <IconSwap key="1" {...rest} />;
    case 'sousuo':
      return <IconSousuo key="2" {...rest} />;
    case 'arrow-right':
      return <IconArrowRight key="3" {...rest} />;
    case 'arrow-lift':
      return <IconArrowLift key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
