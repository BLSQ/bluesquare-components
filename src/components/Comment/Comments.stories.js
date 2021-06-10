import { ThemeProvider } from '@material-ui/core';
import { arrayOf, string } from 'prop-types';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { theme } from '../../styles/iaso/theme';
import { Comment } from './index';

export default {
    title: 'Comment',
    component: Comment,
    argTypes: {
        avatar: string,
        author: string,
        content: string,
        postingTime: string,
        classNames: arrayOf(string),
    },
};
const Template = args => (
    <ThemeProvider theme={theme}>
        <IntlProvider locale="en" messages={{}}>
            <Comment {...args} />
        </IntlProvider>
    </ThemeProvider>
);

export const NoAvatar = Template.bind({});
NoAvatar.args = {
    avatar: null,
    author: 'Bluesquare',
    content: 'This is a comment',
    postingTime: 'Just now',
};
