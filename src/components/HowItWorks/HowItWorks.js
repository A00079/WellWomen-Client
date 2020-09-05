import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '10rem'
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
  container_img :{
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
          container_img :{
            position: 'absolute',
            height: '100%'
          }
    }

  switch (stepIndex) {
    case 0:
      return <div className={classes.container}>
      <img style={{display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%'}} className={classes.container_img} src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" alt="a baby duckling sitting on its duckling butt" />
    <h4 align="center" className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
    </div>
      ;
    case 1:
      return <div className={classes.container}>
      <img style={{display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%'}} className={classes.container_img} src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" alt="a baby duckling sitting on its duckling butt" />
    <h4 align="center" className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
    </div>;
    case 2:
      return <div className={classes.container}>
      <img style={{display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%'}} className={classes.container_img} src="https://homepages.cae.wisc.edu/~ece533/images/baboon.png" alt="a baby duckling sitting on its duckling butt" />
    <h4 align="center" className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
    </div>;
    default:
      return <div className={classes.container}>
      <img style={{display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%'}} className={classes.container_img} src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" alt="a baby duckling sitting on its duckling butt" />
    <h4 align="center" className="m-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
    </div>;
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
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            
            <div style={{textAlign: 'center'}}>
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
  );
}
