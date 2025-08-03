import type { FC, PropsWithChildren } from 'react';

import cx from 'classnames';

import type { ITypographyProps } from './types';

const sizeMap = {
  xs: 'text-[12px] leading-[16px]',
  s: 'text-[14px] leading-[18px]',
  m: 'text-[16px] leading-[20px]',
  l: 'text-[18px] leading-[24px]',
  h3: 'text-[20px] leading-[28px]',
  h2: 'text-[24px] leading-[32px]',
  h1: 'text-[28px] leading-[36px]',
};

const weightMap = {
  normal: 'font-normal',
  medium: 'font-medium',
  bold: 'font-bold',
};

export const Typography: FC<PropsWithChildren<ITypographyProps>> = ({
  weight = 'normal',
  size = 's',
  dSize = 'm',
  nowrap = false,
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cx(
        sizeMap[size],
        'md:' + sizeMap[dSize],
        weightMap[weight],
        'tracking-[0.01em]',
        nowrap && 'whitespace-nowrap',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const AccessibleHiddenText = ({ children }: PropsWithChildren) => (
  <span className="sr-only">{children}</span>
);
