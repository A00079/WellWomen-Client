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
    if ("authorizer" in localStorage) {
      sethandeldropdown(true)
    } else {
      sethandeldropdown(false)
    }
  }, [props])
  const onLogoutClick = () => {
    sethandeldropdown(false)
    props.logoutUser();
  };
  return (
    <List className={classes.list}>
      <Link to='/'>
        <ListItem className={classes.listItem}>
          Home
      </ListItem>
      </Link>
      {
        props.is_admin.isAdmin ? "" : <Link to="/singleaboutus"><ListItem className={classes.listItem}>
            About
        </ListItem>
        </Link>
      }
      {
        props.is_admin.isAdmin ? "" : <ListItem className={classes.listItem}>
          <DirectLinkDiv
            to="ourwork"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Transformation</DirectLinkDiv>
        </ListItem>
      }
      {
        props.is_admin.isAdmin ? "" : <ListItem className={classes.listItem}>
          <DirectLinkDiv
            to="testimonials"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Testimonials</DirectLinkDiv>
        </ListItem>
      }
      {
        props.is_admin.isAdmin ? "" : <ListItem className={classes.listItem}>
          <DirectLinkDiv
            to="stats"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Stats</DirectLinkDiv>
        </ListItem>
      }
      {
        props.is_admin.isAdmin ? "" : <ListItem className={classes.listItem}>
          <DirectLinkDiv
            to="contactus"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact Us</DirectLinkDiv>

        </ListItem>
      }
      <Link to="/dashboard">
        <ListItem className={classes.listItem}>
          Blogs
  </ListItem>
      </Link>
      {
        props.is_admin.isAdmin ? <ListItem className={classes.listItem}>
          Admin Panel
      </ListItem> : ""
      }
      <Link to="/YoutubeVideos">
        <ListItem className={classes.listItem}>
          Youtube
      </ListItem>
      </Link>
      {/* {
        handeldropdown ?
          <ListItem className={classes.listItem}>
            <Button style={{backgroundColor: '#D00F7F', fontFamily: 'Open Sans',color:'#FFF'}} variant="contained" size="small" color="primary" onClick={() => onLogoutClick()}>
              Logout
          </Button>
          </ListItem> : <ListItem className={classes.listitemdrop}>
            <CustomDropdown
              noLiPadding
              buttonText=""
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              buttonIcon={Apps}
              dropdownList={[
                <Link to="/login" className={classes.dropdownLink}>
                  Sign In
            </Link>,
                <Link to="/signup" className={classes.dropdownLink}>
                  Sign Up
            </Link>
              ]}
            />
          </ListItem>
      } */}
    </List >
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