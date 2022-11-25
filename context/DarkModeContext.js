import { createContext } from 'react';

/**
 * A React Context used to indicate if the application is in a dark mode.
 */
const DarkModeContext = createContext(false);

export default DarkModeContext;
