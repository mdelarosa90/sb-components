import { Meta, StoryObj } from '@storybook/react';
import { MyLabel} from "../../components/MyLabel";

const meta = {
  title: 'UI/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select'
    },
    color: {
      control: 'select'
    },
    fontColor: {
      control: 'color'
    }
  }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    size: 'normal',
    label: 'Example label',
    color: 'primary',
  },
};

export const AllCaps: Story = {
  args: {
    size: 'h1',
    label: 'Prueba All Caps',
    color: 'tertiary',
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    size: 'h2',
    label: 'Prueba Secondary',
    color: 'secondary',
  },
};

export const Terciary: Story = {
  args: {
    size: 'h3',
    label: 'Prueba Terciary',
    color: 'tertiary',
  },
}

export const CustomFontColor: Story = {
  args: {
    size: 'h2',
    label: 'Prueba Font',
    fontColor: '#999'
  },
}