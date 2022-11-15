import { Button } from '@arcanetechnology/react-ui-lib/lib/index.cjs';
import cn from 'classnames';
import styles from './index.module.scss';

export default function CallToActionInput({ className }) {
  return (
    <div className={cn(styles.inputWrapper, { [className]: !!className })}>
      <input type="email" placeholder="Enter email address" disabled />
      <Button onClick={() => { alert('Work in progress'); }}>
        Get Started
      </Button>
    </div>
  );
}
