/*eslint-disable*/
import React, { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// import Button from "../CustomButtons/Button.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import { logoutUser } from "../../actions/authActions";
import * as Scroll from 'react-scroll';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
let DirectLinkDiv = Scroll.Link;

const HeaderLinks = (props) => {
    const classes = useStyles();
    const [handeldropdown, sethandeldropdown] = useState(null)

    useEffect(() => {
        console.log('props', props)
        if ("authorizer" in localStorage) {
            sethandeldropdown(true)
        } else {
            sethandeldropdown(false)
        }
    }, [props])
    const onLogoutClick = () => {
        props.logoutUser();
    };
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                Home
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/YoutubeVideos">Blogs</Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/YoutubeVideos">Youtube</Link>
            </ListItem>
            <ListItem className={classes.listitemdrop}>
                <CustomDropdown
                    noLiPadding
                    buttonText=""
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="" onClick={() => onLogoutClick()} className={classes.dropdownLink}>
                            Logout
                </Link>
                    ]}
                />
            </ListItem>
        </List>
    );
}

HeaderLinks.propTypes = {
    is_admin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    is_admin: state.is_admin
});

export default connect(
    mapStateToProps, { logoutUser }
)(HeaderLinks);