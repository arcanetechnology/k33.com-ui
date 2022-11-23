/* eslint-disable max-len */

import { getColorScheme } from './helpers/getColorScheme';

export default function Folder({ active, dark }) {
  const { fill, fillOpacity } = getColorScheme({ active, dark });

  return (
    <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 0.320068V6.32007H28L22 0.320068ZM20.5 32.3201H7.5C3.36438 32.3201 0 28.9576 0 24.8201V7.82007C0 6.99507 0.671875 6.32007 1.5 6.32007C2.32812 6.32007 3 6.99507 3 7.82007V24.8201C3 27.3013 5.01875 29.3201 7.5 29.3201H20.5C21.3281 29.3201 22 29.9919 22 30.8201C22 31.6482 21.3313 32.3201 20.5 32.3201Z" fill={fill} fillOpacity={fillOpacity} />
      <path opacity="0.4" d="M6 23.3201V3.32007C6 1.66319 7.34375 0.320068 9 0.320068H22V6.32007H28V23.3201C28 24.9769 26.6569 26.3201 25 26.3201H9C7.34375 26.3201 6 24.9763 6 23.3201Z" fill={fill} fillOpacity={fillOpacity} />
    </svg>
  );
}
