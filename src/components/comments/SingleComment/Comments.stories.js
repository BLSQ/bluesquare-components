import { ThemeProvider } from '@mui/material';
import { arrayOf, string } from 'prop-types';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { theme } from '../../../styles/iaso/theme';
import { SingleComment } from './index';

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
            <SingleComment {...args} />
        </IntlProvider>
    </ThemeProvider>
);

export const NoAvatar = Template.bind({});
NoAvatar.args = {
    avatar: null,
    author: 'Bluesquare',
    content: `Reprehenderit boudin excepteur, dolore magna esse capicola ex proident shankle pork ut aliqua adipisicing. Id lorem pancetta tail cupim salami fugiat filet mignon dolore elit adipisicing. Ball tip tri-tip occaecat hamburger, chicken cupidatat aliquip ex prosciutto picanha jerky jowl. Qui filet mignon brisket, duis commodo swine corned beef nulla exercitation id laborum. Flank quis dolor landjaeger frankfurter t-bone hamburger ribeye burgdoggen sed jowl laborum sirloin. Salami elit dolore duis, deserunt short loin aliquip tail pork chop chuck frankfurter chicken.`,
    postingTime: 'Just now',
};
