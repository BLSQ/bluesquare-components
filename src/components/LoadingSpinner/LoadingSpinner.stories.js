import { bool, number, object } from 'prop-types';
import React from 'react';
import { LoadingSpinner } from './index';

export default {
    title: 'LoadingSpinner',
    component: LoadingSpinner,
    argTypes: {
        size: number,
        fixed: bool,
        padding: number,
        transparent: bool,
        classes: object,
    },
};

const Template = args => <LoadingSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 40,
    transparent: false,
    fixed: true,
    padding: 0,
    classes: {},
};

export const Transparent = Template.bind({});
Transparent.args = {
    size: 40,
    transparent: true,
    fixed: true,
    padding: 0,
    classes: {},
};
// TODO Figure out classes prop format
