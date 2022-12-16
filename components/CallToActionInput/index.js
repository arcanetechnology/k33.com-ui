import { Button } from '@arcanetechnology/react-ui-lib';
import cn from 'classnames';
import useIsDarkMode from 'hooks/useIsDarkMode';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import SuccessMessage from './SuccessMessage';

const INVALID_EMAIL_MESSAGE = 'Enter a valid email.';
const UNEXPECTED_ERROR = 'Unexpected error occurred. Please try again later.';

const SUCCESS_MESSAGE_INTERVAL = 5000;

/**
 * Represents a call to action email input with a submit button.
 * An API is called when the user enters a valid email to send them an email and record data in Sendgrid.
 *
 * @param {String} className: an additonal className for styling
 */
export default function CallToActionInput({ className }) {
  const isDarkMode = useIsDarkMode();

  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [emailError, setEmailError] = useState();

  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  useEffect(() => {
    if (isSuccessMessageVisible) {
      setTimeout(() => {
        setIsSuccessMessageVisible(false);
      }, SUCCESS_MESSAGE_INTERVAL);
    }
  }, [isSuccessMessageVisible]);

  useEffect(() => {
    setEmailError(null);
  }, [email]);

  const sendEmail = async () => {
    if (!isValidEmail(email)) {
      setEmailError(INVALID_EMAIL_MESSAGE);
      return;
    }

    setIsSending(true);

    try {
      const result = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify({
          email
        })
      });

      if (result.status !== 200) {
        setEmailError(UNEXPECTED_ERROR);
      } else {
        setIsSuccessMessageVisible(true);
        setEmail('');
      }
    } catch (e) {
      setEmailError(UNEXPECTED_ERROR);
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
    <div className={cn(styles.wrapper, { [className]: !!className })} aria-label="email-input">
      <div className={cn(styles.inputWrapper, { [styles.dark]: isDarkMode, [styles.error]: !!emailError })}>
        <div className={styles.emailWrapper}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            onKeyDown={handleKey}
          />
        </div>

        <Button onClick={sendEmail} disabled={isSending} onDark={isDarkMode}>
          Get Early Access
        </Button>
      </div>

      {emailError && (
        <div className={styles.errorMessage}>{emailError}</div>
      )}

      <SuccessMessage isVisible={isSuccessMessageVisible} />
    </div>
  );
}

export const isValidEmail = (email) => (
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
);
