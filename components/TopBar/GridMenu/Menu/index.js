import useOutsideClick from 'hooks/useOutsideClick';
import styles from './index.module.scss';
import cn from 'classnames';
import K33 from 'svg/K33';
import Folder from 'svg/Folder';
import Arrows from 'svg/Arrows';
import Chart from 'svg/Chart';
import NextLink from 'components/NextLink';
import { useRouter } from 'next/router';
import React from 'react';
import useIsDarkMode from 'hooks/useIsDarkMode';

const MENU_ITEMS = [
  {
    url: '/',
    icon: <K33 />,
    label: 'Home'
  },
  {
    url: '/research',
    icon: <Folder />,
    label: 'Research'
  },
  {
    url: '/markets',
    icon: <Arrows />,
    label: 'Markets'
  },
  {
    url: null,
    icon: <Chart />,
    label: 'Investments'
  }
];

/**
 * Represents the Grid menu content, with various icons leading to different pages.
 *
 * @param {Boolean} isOpen
 * @param {Function} onClose
 */
export default function Menu({ isOpen, onClose }) {
  const { pathname } = useRouter();
  const isDarkMode = useIsDarkMode();

  const componentRef = useOutsideClick({
    isDisplayed: isOpen,
    onOutsideClick: onClose
  });

  const handleLinkClick = (e) => {
    e.stopPropagation();

    if (e.currentTarget.getAttribute('data-disabled') === 'true') {
      e.preventDefault();
    }
  };

  return (
    <ul className={cn(styles.appList, { [styles.open]: isOpen, [styles.dark]: isDarkMode })} ref={componentRef}>
      {MENU_ITEMS.map((item) => (
        <li key={item.url} className={cn({ [styles.active]: pathname === item.url })}>
          <NextLink href={item.url || '#'} data-disabled={item.url === null} onClick={handleLinkClick}>
            {React.cloneElement(item.icon, { active: pathname === item.url, dark: isDarkMode })}
            <div>{item.label}</div>
          </NextLink>
        </li>
      ))}
    </ul>
  );
}
