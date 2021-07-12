import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    navigation: {
        position: 'fixed',
        top: '20px',
        left: '20px',
        bottom: '20px',
        width: '70px',
        borderRadius: '10px',
        boxSizing: 'initial',
        background: '#2b343b',
        transition: 'width 0.5s',
        overflow: 'hidden',
        boxShadow: '10px 0 0 #4187f6',
        "&.active": {
            width: '255px',
        }
    },
    ul: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        paddingLeft: '5px',
        paddingTop: '40px',
    },
    li: {
        position: 'relative',
        listStyle: 'none',
        width: '100%',
    },
    link: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        textDecoration: 'none',
        color: '#fff',
        textDecorationStyle: 'none',
    },
    icon: {
        position: 'relative',
        display: 'block',
        minWidth: '60px',
        height: '60px',
        lineHeight: '70px',
        textAlign: 'center',
    },
    title: {
        position: 'relative',
        display: 'block',
        paddingLeft: '10px',
        height: '60px',
        lineHeight: '60px',
        whiteSpace: 'normal',
    },
    active: {
        background: '#4187f6',
        listStyle: 'none',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        '& a::before': {
            content: '""',
            position: 'absolute',
            top: '-30px',
            right: '0',
            width: '30px',
            marginRight: '5px',
            height: '30px',
            background: '#2b343b',
            borderRadius: '50%',
            boxShadow: '15px 15px 0 #4187f6',
        },
        '& a::after': {
            content: '""',
            position: 'absolute',
            bottom: '-30px',
            right: '0',
            width: '30px',
            marginRight: '5px',
            height: '30px',
            background: '#2b343b',
            borderRadius: '50%',
            boxShadow: '15px -15px 0 #4187f6',
        }
    },
    toggle: {
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        background: '#4187f6',
        borderRadius: '10px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeToggle: {
        background: '#ff4d89',
    },
    toggleIcon: {
        position: 'absolute',
        color: '#fff',
        fontSize: '34px',
        display: 'none',
    },
    open: {
        display: 'block',
    },
    close: {
        display: 'block',
    }
}));

export default useStyles;