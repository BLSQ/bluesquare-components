import { commonStyles } from '../../../styles/iaso/common';

const styles = theme => ({
    ...commonStyles(theme),
    column: {
        '&>section': {
            width: '100%',
        },
    },
});

export { styles };
