import React from 'react';
import CircularProgress, {
    ICircularProgressProps,
} from 'Components/CircularProgress';
import { Story } from '@storybook/react';

export default {
    title: 'CircularProgress',
    component: CircularProgress,
};

const Template: Story<ICircularProgressProps> = (
    args: JSX.IntrinsicAttributes & ICircularProgressProps
) => <CircularProgress {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color: 'primary',
    size: 40,
    thickness: 3.6,
    value: 0,
    variant: 'indeterminate',
};
