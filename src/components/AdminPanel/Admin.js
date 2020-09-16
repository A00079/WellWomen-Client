import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
    Container,
    Grid
} from '@material-ui/core';
import Budget from './Budget';
import TasksProgress from './TasksProgress';
import TotalProfit from './TotalProfit';
import TotalCustomers from './TotalCustomers';
import LatestOrders from './LatestOrders';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import userIcon from "../../assets/img/signfemale.png";
import PostBlog from "./Blogs/AddBlog.js";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawerItems:{
        cursor: 'pointer'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [dashboard, setdashboard] = React.useState(true);
    const [postBlog, setpostBlog] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleActivePanel = (activePanel) => {
        if(activePanel === 'dashboard'){
            setdashboard(true);
            setpostBlog(false);
        }
        if(activePanel === 'postblog'){
            setdashboard(false);
            setpostBlog(true);
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dashboard
          </Typography>
                    <Avatar alt="admin icon" src={userIcon} style={{ position: 'absolute', right: '40px' }} />

                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem className={classes.drawerItems}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText onClick={() => handleActivePanel('dashboard')}>Dashboard</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.drawerItems}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText onClick={() => handleActivePanel('postblog')}>Post Blog</ListItemText>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            {
                dashboard ?
                    <Grid
                        style={{ margin: '4rem 1rem' }}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}>
                        <Grid item xs={12} md={3} lg={3}>
                            <Budget />
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                            <TotalCustomers />
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                            <TasksProgress />
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                            <TotalProfit />
                        </Grid>
                    </Grid> : ""
            }
            {
                postBlog ?
                    <PostBlog /> : ""
            }
        </div>
    ); 
}
