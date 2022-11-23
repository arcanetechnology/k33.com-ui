export const getColorScheme = ({ dark, active }) => {
  const fill = dark
    ? active ? 'white' : 'white'
    : active ? '#090A0B' : '#343A40';

  const fillOpacity = active ? 1 : 0.3;

  const textColor = dark
    ? active ? '#090A0B' : 'rgba(235, 235, 245, 0.3)'
    : 'white';

  return { fill, fillOpacity, textColor };
};
