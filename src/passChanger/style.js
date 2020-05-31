export const styles = theme => ({
    paper: {
        position: 'relative',
        margin: 'auto',
        height: '100%',
        width: '500px',
        padding: '30px 20px 20px 20px'
    },
    fieldWrapper: {
        display: 'flex',
        position: 'relative',
        paddingBottom: '15px',
    },
    field: {
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'baseline',
    },
    name: {
        width: '260px',
        color: '#808285',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    formItem__textField: {
        margin: '0 10px 10px 0',
        width: 'calc(100% - 150px) !important',
        
    },
    input: {
        height: '10px !important',
    },
    action: {
        padding: '10px 50px 10px 30px',
    },
    leftIcon: {
        marginRight: '20px',
    },
    snack: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
});
