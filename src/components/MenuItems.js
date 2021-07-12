import React from 'react';
import {
    HomeRounded,
    PersonRounded,
    MessageRounded,
    SettingsRounded,
    HelpRounded,
    ExitToAppRounded,
} from '@material-ui/icons';


export const itemMain = [{
    id: 1,
    name: 'Home',
    icon: <HomeRounded style={{fontSize: '1.5em'}}/>,
}, {
    id: 2,
    name: 'Profile',
    icon: <PersonRounded style={{fontSize: '1.5em'}}/>,
}, {
    id: 3,
    name: 'Messages',
    icon: <MessageRounded style={{fontSize: '1.5em'}}/>,
}, {
    id: 4,
    name: 'Settings',
    icon: <SettingsRounded style={{fontSize: '1.5em'}}/>,
}, {
    id: 5,
    name: 'Help',
    icon: <HelpRounded style={{fontSize: '1.5em'}} />,
}, {
    id: 6,
    name: 'Sign Out',
    icon: <ExitToAppRounded style={{fontSize: '1.5em'}}/>,
}]

const toExport = {
    itemMain,
}

export default toExport;