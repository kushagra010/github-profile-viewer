import React from 'react';
import Button, { IButtonProps } from 'Components/Buttons';
import { Story } from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
    argTypes: { onClick: { action: 'Click' } },
};

const Template: Story<IButtonProps> = (
    args: JSX.IntrinsicAttributes & IButtonProps
) => <Button {...args}>Press Me</Button>;

export const Primary = Template.bind({});

Primary.args = {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    fullWidth: false,
    disabled: false,
};
