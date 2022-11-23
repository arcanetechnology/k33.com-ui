export const getColorScheme = ({ dark, active }) => {
  const fill = dark
    ? active ? 'white' : 'white'
    : active ? '#090A0B' : '#343A40';

  const fillOpacity = active ? 1 : 0.3;

  return { fill, fillOpacity };
};
