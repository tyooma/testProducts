import { Colors } from '../types/constants';

export const getColor = (colors: Colors, index: number) => {
  const keys = Object.keys(colors);
  const key = keys[index];

  return colors[key];
};
