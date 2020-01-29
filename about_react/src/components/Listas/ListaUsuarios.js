import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SelectedListItem(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.listaUsuarios.map(item => (
                <Fragment>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItem
                            button
                            onClick={()=>props.handleClick(item.id)}
                        >
                            <ListItemText primary={`${item.first_name} ${item.last_name}`} />
                        </ListItem>
                    </List>
                </Fragment>
            ))}
        </div>
    );
}