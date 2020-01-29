import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    link:{
        textDecoration:'none'
    }
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <Link className={classes.link} key={1} to={{ pathname: '/' }}>
                    <ListItem button key={1}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </Link>
                <Link className={classes.link} key={2} to={{ pathname: '/listas' }}>
                    <ListItem button key={2}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Listas'} />
                    </ListItem>
                </Link>
                <Link className={classes.link} key={3} to={{ pathname: '/imagenes' }}>
                    <ListItem button key={3}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Imágenes'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}
