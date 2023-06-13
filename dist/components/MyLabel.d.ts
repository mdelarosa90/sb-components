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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
