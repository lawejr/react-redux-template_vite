import { ForwardedRef, forwardRef } from 'react';

import {
  Button as AntdButton,
  Input as AntdInput,
  ButtonProps,
  InputProps,
  InputRef,
} from 'antd';
import { TextAreaProps, TextAreaRef } from 'antd/es/input/TextArea';
import cx from 'classnames';

const DEFAULT_SIZE = 'large';

// TODO: не использовать. Не все стили темы подтягиваются.
// Переписать стилизацию выше на обычные классы без styled components
// или через либу antd-style => createStyles
const Button = forwardRef(
  (
    { className, ...props }: ButtonProps,
    forwardedRef: ForwardedRef<HTMLButtonElement>,
  ) => (
    <AntdButton
      className={cx('custom-ant-btn', className)}
      ref={forwardedRef}
      size={DEFAULT_SIZE}
      block
      {...props}
    />
  ),
);

const Input = forwardRef(
  (props: InputProps, forwardedRef: ForwardedRef<InputRef>) => (
    <AntdInput ref={forwardedRef} size={DEFAULT_SIZE} {...props} />
  ),
) as typeof AntdInput;

const TextArea = forwardRef(
  (
    { className, ...props }: TextAreaProps,
    forwardedRef: ForwardedRef<TextAreaRef>,
  ) => (
    <AntdInput.TextArea
      className={cx('antd-textarea', className)}
      ref={forwardedRef}
      size={DEFAULT_SIZE}
      {...props}
    />
  ),
);

export { Button, Input, TextArea };
