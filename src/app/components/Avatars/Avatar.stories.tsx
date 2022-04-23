import React from 'react';
import Avatar, { IAvatarProps } from 'Components/Avatars';
import { Story } from '@storybook/react';

export default {
    title: 'Avatar',
    component: Avatar,
};

const Template: Story<IAvatarProps> = (
    args: JSX.IntrinsicAttributes & IAvatarProps
) => <Avatar {...args} />;

export const Circular = Template.bind({});

Circular.args = {
    variant: 'circular',
};
