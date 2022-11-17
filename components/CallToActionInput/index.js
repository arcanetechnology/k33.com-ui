import { Button } from '@arcanetechnology/react-ui-lib';
import cn from 'classnames';
import { useState } from 'react';
import styles from './index.module.scss';

export default function CallToActionInput({ className, label }) {
  const [email, setEmail] = useState('');

  const sendEmail = async () => {
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        email
      })
    });
  };

  return (
    <div className={cn(styles.inputWrapper, { [className]: !!className })}>
      <div className={styles.emailWrapper}>
        <input disabled type="email" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value); }} />
      </div>

      <Button onClick={sendEmail}>
        {label || 'Get Started'}
      </Button>
    </div>
  );
}
