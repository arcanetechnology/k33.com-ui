import { Button, Popup } from '@arcanetechnology/react-ui-lib';
import cn from 'classnames';
import { useState } from 'react';
import styles from './index.module.scss';

export default function CallToActionInput({ className }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={cn(styles.inputWrapper, { [className]: !!className })}>
      <input type="email" placeholder="Enter email address" disabled />
      <Button onClick={() => { setIsPopupOpen(true); }}>
        Get Started
      </Button>

      <Popup showCloseIcon isOpen={isPopupOpen} onClose={() => { setIsPopupOpen(false); }}>
        <div style={{ padding: '32px 8px', fontSize: '22px' }}>
          Work in Progress!
        </div>
      </Popup>
    </div>
  );
}
