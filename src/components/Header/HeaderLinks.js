/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Button from "../CustomButtons/Button.js";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";


// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        Home
      </ListItem>
      <ListItem className={classes.listItem}>
        About
      </ListItem>
      <ListItem className={classes.listItem}>
        Our Work
      </ListItem>
      <ListItem className={classes.listItem}>
        Testimonials
      </ListItem>
      <ListItem className={classes.listItem}>
        Pricing
      </ListItem>
      <ListItem className={classes.listItem}>
        Stats
      </ListItem>
      <ListItem className={classes.listItem}>
        Contact Us
      </ListItem>
      <ListItem className={classes.listItem}>
        Testimonials
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
            <Link to="/login" className={classes.dropdownLink}>
              Login
            </Link>,
            <Link to="/signup" className={classes.dropdownLink}>
              Sign Up
            </Link>
          ]}
        />
      </ListItem>
    </List>
  );
}
