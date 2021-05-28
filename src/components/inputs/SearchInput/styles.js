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
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
        boxShadow: 'none',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        paddingRight: theme.spacing(7),
        width: '100%',
    },
});

export { styles };
