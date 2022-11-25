import { useEffect, useState } from 'react';

/**
 * Returns true if the execution is on the client side.
 *
 * @returns {Boolean}
 */
const useClientSide = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

export default useClientSide;
