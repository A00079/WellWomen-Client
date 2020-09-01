import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../../src/components/Header/Header.js";
import HeaderLinks from "../../src/components/Header/HeaderLinks.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import CustomButton from "../../src/components/CustomButtons/Button.js";
import ServewayForm from "../components/StartJourny/ServewayForm.js";
import AgeGroup from "../components/StartJourny/AgeGroup.js";



const useStyles = makeStyles((theme) => ({
  appbarroot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  dropdownLink: {
    marginLeft: '20px'
  },
  title: {
    flexGrow: 1,
  },
  cardroot: {
    maxWidth: 345,
  },
  cardcenter: {
    textAlign: '-webkit-center'
  },
  root: {
    width: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footer: {
    textAlign: 'center'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select your age group.', 'Select your goal.', 'Select your activity level.', 'Select your eating habbits.', 'Completed.'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <AgeGroup />;
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    case 3:
      return 'This is the bit I really care about!';
    case 4:
      return <ServewayForm />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <div className={classes.appbarroot}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Well Women
          </Typography>
            <Link to="/login" className={classes.dropdownLink}>
              Home
          </Link>
            <Link to="/login" className={classes.dropdownLink}>
              Pricing
          </Link>
            <Link to="/login" className={classes.dropdownLink}>
              Stats
          </Link>
            <Link to="/login" className={classes.dropdownLink}>
              Contact Us
          </Link>
            <CustomButton
              color="transparent"
              size="sm"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
                                </CustomButton>
            <CustomButton
              color="twitter"
              size="sm"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
                                </CustomButton>
          </Toolbar>
        </AppBar>
      </div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={12}>
              <div className={classes.footer}>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>All steps completed</Typography>
                  </div>
                ) : (
                    <div>
                      <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.backButton}
                        >
                          Back
              </Button>
                        
                          {activeStep === steps.length - 1 ? '' : <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>}
                      </div>
                    </div>
                  )}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
