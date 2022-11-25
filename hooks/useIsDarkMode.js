import { useContext } from 'react';
import DarkModeContext from 'context/DarkModeContext';

/**
 * Returns true if the application is in dark mode.
 *
 * @returns {Boolean}
 */
const useIsDarkMode = () => {
  const isDarkMode = useContext(DarkModeContext);
  return isDarkMode;
};

export default useIsDarkMode;
