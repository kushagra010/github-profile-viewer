import React from 'react';
import Input, { IInputProps } from 'Components/Inputs';
import { Story } from '@storybook/react';

export default {
    title: 'Input',
    component: Input,
    argTypes: { onChange: { action: 'Changed' } },
};

const Template: Story<IInputProps> = (
    args: JSX.IntrinsicAttributes & IInputProps
) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'username',
    variant: 'outlined',
    type: 'text',
    color: 'primary',
    size: 'medium',
    error: false,
    autoFocus: false,
    fullWidth: false,
    disabled: false,
};
