import cn from 'classnames';
import { useState } from 'react';
import styles from './index.module.scss';
import Menu from './Menu';
import GridMenuIcon from 'svg/GridMenu';
import useIsDarkMode from 'hooks/useIsDarkMode';

/**
 * Represents the grid menu on the top bar. It contains various links to pages.
 */
export default function GridMenu() {
  const isDarkMode = useIsDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((state) => !state);
  };

  const onGridKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
      toggleMenu(e);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={cn(styles.menuWrapper, { [styles.open]: isMenuOpen, [styles.dark]: isDarkMode })}
      onClick={toggleMenu}
      onKeyDown={onGridKeyDown}
      data-testid="grid"
    >
      <GridMenuIcon />

      <div className={cn(styles.menu, { [styles.dark]: isDarkMode })}>
        <Menu
          isOpen={isMenuOpen}
          onClose={() => { setIsMenuOpen(false); }}
        />
      </div>
    </div>
  );
}
