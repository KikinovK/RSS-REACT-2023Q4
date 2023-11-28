import { FC, ReactNode } from 'react';

import './Grid.scss';

interface IGridProps {
  container?: boolean;
  item?: boolean;
  children?: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Grid: FC<IGridProps> = ({
  container,
  item,
  children,
  xs,
  sm,
  md,
  lg,
  xl,
}) => {
  const gridClass: string[] = [];

  if (container) gridClass.push('grid__container');
  if (item) gridClass.push('grid__item');
  if (xs) gridClass.push(`grid__item--xs-${xs}`);
  if (sm) gridClass.push(`grid__item--sm-${sm}`);
  if (md) gridClass.push(`grid__item--md-${md}`);
  if (lg) gridClass.push(`grid__item--lg-${lg}`);
  if (xl) gridClass.push(`grid__item--xl-${xl}`);

  return <div className={gridClass.join(' ')}>{children}</div>;
};

export default Grid;
