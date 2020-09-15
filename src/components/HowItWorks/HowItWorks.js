import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HowItWorksCard from '../../components/Card/HowItWorksCard.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '4rem',
    [theme.breakpoints.down("sm")]: {
      marginTop: '1rem',
    }
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  container: {
    width: '50%',
    paddingBottom: '50%',
    margin: '10% auto',
    position: 'relative',
    overflow: 'hidden',
  },
  container_img: {
    position: 'absolute',
    height: '100%'
  }
}));

function getSteps() {
  return ['Choose Your Program', 'Brainstorm With Your Buddy', 'Join Our Community', 'Break Through Plateaus', 'Celebrate Your Milestones'];
}

function getStepContent(stepIndex) {
  const classes = {
    container: {
      width: '50%',
      paddingBottom: '50%',
      margin: '10% auto',
      position: 'relative',
      overflow: 'hidden',
    },
    container_img: {
      position: 'absolute',
      height: '100%'
    }
  }

  switch (stepIndex) {
    case 0:
      return <HowItWorksCard />;
    case 1:
      return <HowItWorksCard />;
    case 2:
      return <HowItWorksCard />;
    default:
      return <HowItWorksCard />;
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
    <React.Fragment>
    <h1 style={{ fontStyle: 'normal',
    color: '#4e6073' }} className="sm:text-3xl mb-0 mt-16 font-extrabold md:mb-0 md:mt-16 text-3xl  md:text-4xl font-medium title-font" align="center">
      HOW <span class="text-indigo-600"> IT WORKS</span>
    </h1>

    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div style={{width: '50%',margin: '0 auto'}}>
            <Typography className={classes.instructions} style={{textAlign: 'center'}}>All steps completed</Typography>
            <Button onClick={handleReset} variant="contained" color="primary" style={{width: '100%',margin: '0 auto'}}>Reset</Button>
          </div>
        ) : (
            <div>
              <h1 style={{ color: '#000' }} className="sm:text-3xl mb-0 md:mb-0 text-2xl md:text-3xl font-medium title-font text-white-600" align="center">
                  {steps[activeStep]}
                </h1>
              <div className={classes.instructions}>
                  {getStepContent(activeStep)}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
              </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
    </React.Fragment>
  );
}
