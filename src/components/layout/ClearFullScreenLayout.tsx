import { HTMLAttributes, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import cx from 'classnames';

//max-width: 360px;
//padding: var(--r16) var(--r16) calc(var(--BOTTOM_SAFE_AREA) + var(--r16));

// TODO: check pb and max-w
const wrapperClassnames = cx([
  'flex grow flex-col self-center justify-between w-full max-w-[360px]',
  'px-4 pt-4 pb-[calc(var(--BOTTOM_SAFE_AREA) + 16px)] desktop:justify-center',
]);

export function ClearFullScreenLayout({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={wrapperClassnames} {...props}>
      {children || <Outlet />}
    </div>
  );
}
