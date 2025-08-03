import { HTMLAttributes } from 'react';

type TextSize = 'xs' | 's' | 'm' | 'l';
type TitleSize = 'h1' | 'h2' | 'h3';
type Wight = 'normal' | 'medium' | 'bold';

type TypographySize = TextSize | TitleSize;

interface ITypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * font-weight
   */
  weight?: Wight;
  /**
   * mobile font-size
   */
  size?: TypographySize;
  /**
   * desktop font-size
   */
  dSize?: TypographySize;
  /**
   * wrap text
   */
  nowrap?: boolean;
}

export { type TypographySize, type ITypographyProps };
