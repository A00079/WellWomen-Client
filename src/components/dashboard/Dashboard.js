import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { notify } from 'react-notify-toast';
import Header from "../Header/Header.js";
import HeaderLinks from "../Header/HeaderLinks.js";
import { validateAdmin } from "../../actions/validateAdmin.js";



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    if(localStorage.getItem("authorizer") === 'ghdglkglg-jioru5867-qroighn-heou-509'){
      this.props.validateAdmin(true)
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
  }

  render() {
    const { user } = this.props.auth;

    return (
      <React.Fragment>
        <Header
          brand="Well Woman"
          rightLinks={<HeaderLinks />}
          fixed
          color="darkpink"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
        />
        <div style={{ height: "175vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into a full-stack{" "}
                  <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
              </h4>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
            </button>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  is_admin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  is_admin: state.is_admin
});

export default connect(
  mapStateToProps,
  { logoutUser, validateAdmin }
)(Dashboard);
