import { Meta } from '@storybook/react';
import AddToCartButton from './AddToCartButton';

const meta: Meta<typeof AddToCartButton> = {
  title: 'AddToCartButton',
  component: AddToCartButton,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    count: 0,
  },
};

export const NonZero = {
  args: {
    count: 1,
  },
};
