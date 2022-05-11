import React, { FC, JSXElementConstructor, ReactNode } from 'react';
import cn from 'classnames';
import s from '../Text/Text.module.scss';

interface Props {
  as?: 'div' | 'section' | JSXElementConstructor<any>;
  className?: string;
  children?: ReactNode | any;
}
export const Grid: FC<Props> = ({ as = 'div', className = '', children }) => {
  const Component = as;
  const classes = cn(s.root, {}, className);
  return <Component className={classes}>{children}</Component>;
};
