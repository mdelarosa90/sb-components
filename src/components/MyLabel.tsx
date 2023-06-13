import './mylabel.css';

export interface MyLabelProps {
  /**
   * How large should the text be?
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Label contents
   */
  label?: string;
  /**
   * Color of the label
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Define if text is capitalize
   */
  allCaps?: boolean;
  /**
   * Define custom color of the label
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'no label',
  size = 'h1',
  fontColor
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color} ${allCaps && 'text-capitalize'}`} style={{color: fontColor}}>{label}</span>
  )
}
