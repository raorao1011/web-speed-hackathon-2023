import type { FC } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Anchor.styles';

type Props = {
  href: string;
  dataTestId?: string;
  children: React.ReactNode;
};

export const Anchor: FC<Props> = ({ children, href, ...rest }) => (
  <Link className={styles.container()} to={href} {...rest}>
    {children}
  </Link>
);
