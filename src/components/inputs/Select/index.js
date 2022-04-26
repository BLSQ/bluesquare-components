import React from 'react';
import PropTypes from 'prop-types';

import { SingleSelect } from './single';
import { MultiSelect } from './multi';
import { defaultRenderTags } from './utils';

const SelectCustom = props => {
    if (props.multi) {
        return <MultiSelect {...props} />;
    }
    return <SingleSelect {...props} />;
};

SelectCustom.defaultProps = {
    multi: false,
};

SelectCustom.propTypes = {
    multi: PropTypes.bool,
};

export { SelectCustom as Select, defaultRenderTags as renderTags };
