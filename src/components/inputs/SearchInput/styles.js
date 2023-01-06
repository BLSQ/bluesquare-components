const styles = theme => ({
    // TODO confirm if can safely be deleted
    icon: {
        right: theme.spacing(2),
    },
    // TODO confirm if can safely be deleted
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
    },
    inputInput: {
        paddingRight: theme.spacing(7),
        width: '100%',
    },
    searchIconWrapper: {
        width: '24px',
        height: '24px',
    },
});

export { styles };
