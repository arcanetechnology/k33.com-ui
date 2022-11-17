import { Button } from '@arcanetechnology/react-ui-lib';
import cn from 'classnames';
import { useState } from 'react';
import styles from './index.module.scss';

export default function CallToActionInput({ className, label }) {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async () => {
    setIsSending(true);

    const result = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        email
      })
    });

    if (result.status !== 200) {
      alert('error');
    } else {
      alert('success');
      setEmail('');
    }

    setIsSending(false);
  };

  const handleKey = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      await sendEmail();
    }
  };

  return (
    <div className={cn(styles.inputWrapper, { [className]: !!className })}>
      <div className={styles.emailWrapper}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
          onKeyDown={handleKey}
        />
      </div>

      <Button onClick={sendEmail} disabled={isSending}>
        {label || 'Get Started'}
      </Button>
    </div>
  );
}
