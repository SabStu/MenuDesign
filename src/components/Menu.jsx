import React, {useState} from 'react';
import {itemMain} from './MenuItems';
import {Link} from '@material-ui/core';
import {MenuRounded, CloseRounded} from '@material-ui/icons';
import useStyles from './CustomStyles';

function MainMenu() {
    const [active, setActive] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [itemId, setItemId] = useState(0);
    const classes = useStyles();

    const handleMenuClick = (id) => {
        setItemId(id);
        setActive(true);
    }

    const mapItems = (item) => {
        const classNameTest = active && item.id === itemId;
        return (
            <li key={item.id} 
                onClick={() => handleMenuClick(item.id)} 
                className={classNameTest ? `${classes.li} ${classes.active}` : classes.li}>
                <Link className={classes.link} href="#">
                    <span className={classNameTest ? `${classes.icon} ${classes.active}` : classes.icon}>{item.icon}</span>
                    <span className={classNameTest ? `${classes.title} ${classes.active}` : classes.title}>{item.name}</span>
                </Link>
            </li>
        );
    }

    const handleMenuToggle = () => {
        if(!toggle){
            setToggle(true);
        }else{
            setToggle(false);
        }
    }

    return (
        <React.Fragment>
            <div className={toggle ? `${classes.navigation} active` : classes.navigation}>
                <ul className={classes.ul}>
                    {itemMain.map(mapItems)}
                </ul>
            </div>
            <div onClick={handleMenuToggle} className={toggle ? `${classes.toggle} ${classes.activeToggle}` : classes.toggle}>
                <MenuRounded className={toggle ? classes.toggleIcon : `${classes.toggleIcon} ${classes.open}`}/>
                <CloseRounded className={toggle ? `${classes.toggleIcon} ${classes.close}` : classes.toggleIcon} />
            </div>
        </React.Fragment>
    );
}

export default MainMenu;