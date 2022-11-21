import cn from 'classnames';
import Logo from 'components/Logo';
import NextLink from 'components/NextLink';
import { useRouter } from 'next/router';
import Heart from 'svg/Heart';
import config from './footer-config';
import styles from './index.module.scss';

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.mainPart}>
        <div className={styles.logoWrapper}>
          <Logo className={styles.logo} />
        </div>

        <div className={styles.menuList}>
          {config.map((menu) => (
            <div className={styles.menu} key={menu.title}>
              <div className={styles.title}>{menu.title}</div>
              <ul className={styles.list}>
                {menu.list.map((item) => (
                  <li key={item.label}>
                    <NextLink href={item.url} className={cn({ [styles.active]: pathname === item.url })} disabled={item.url === '#'}>{item.label}</NextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.copywright}>
        <p>© All rights reserved to K33</p>
        <p>Made with <Heart /> in Oslo, Norway</p>
      </div>
    </footer>
  );
}
