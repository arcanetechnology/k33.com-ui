import { useContext } from 'react';
import DarkModeContext from 'context/DarkModeContext';

const useIsDarkMode = () => {
  const isDarkMode = useContext(DarkModeContext);
  return isDarkMode;
};

export default useIsDarkMode;
