import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { DatePicker } from './index';

export default {
    title: 'DatePicker',
    component: DatePicker,
};

const CURRENT_DATE = '12/04/2021';

const Wrapper = props => {
    const [value, setValue] = useState(CURRENT_DATE);
    const args = {
        ...props,
        currentDate: value,
        onChange: newValue => setValue(newValue),
    };
    useEffect(() => {
        setValue(props.currentDate);
    }, [props.currentDate]);
    return <DatePicker {...args} />;
};

const Template = args => (
    <MuiPickersUtilsProvider utils={MomentUtils}>
        <IntlProvider locale="en" messages={{}}>
            <Wrapper {...args} />
        </IntlProvider>
    </MuiPickersUtilsProvider>
);

export const Default = Template.bind({});
Default.args = {
    placeholder: 'placeholder',
    onChange: value => {
        // eslint-disable-next-line no-console
        console.log('Click', value);
    },
    currentDate: CURRENT_DATE,
    hasError: false,
    clearMessage: { id: 'clearMessage', defaultMessage: 'Clear' },
};

export const WithError = Template.bind({});
WithError.args = {
    placeholder: 'placeholder',
    onChange: () => {
        // eslint-disable-next-line no-console
        console.log('Click');
    },
    currentDate: '2021-05-04',
    hasError: true,
    clearMessage: { id: 'clearMessage', defaultMessage: 'Clear' },
};

export const Placeholder = Template.bind({});
Placeholder.args = {
    placeholder: 'placeholder',
    onChange: value => {
        // eslint-disable-next-line no-console
        console.log('Click', value);
    },
    currentDate: null,
    hasError: false,
    clearMessage: { id: 'clearMessage', defaultMessage: 'Clear' },
};
