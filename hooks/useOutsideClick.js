import { useEffect, useRef } from 'react';

/**
 * A custom hook used to track clicks happening outside of the component.
 *
 * @param isDisplayed: boolean; indicates if the component is displayed
 * @param onOutsideClick: (e: any) => void; called when a click outside of the component is detected
 *
 * @return {React.Ref} ref that should be link to the component
 */
const useOutsideClick = ({ isDisplayed, onOutsideClick }) => {
  const componentRef = useRef();

  useEffect(() => {
    // Called when the user is clicking on the document while the component is shown
    const handleOutsideClick = (e) => {
      if (componentRef.current && componentRef.current.contains(e.target)) {
        return;
      }

      onOutsideClick(e);
    };

    if (isDisplayed) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDisplayed, onOutsideClick]);

  return componentRef;
};

export default useOutsideClick;
