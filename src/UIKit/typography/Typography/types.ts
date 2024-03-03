type TextSize = 'xs' | 's' | 'm' | 'l';
type TitleSize = 'h1' | 'h2' | 'h3';
type Wight = 'normal' | 'medium' | 'bold';

export type TypographySize = TextSize | TitleSize;

export interface ITypographyProps {
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
}
