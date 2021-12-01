import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useStyles } from './styles'
import Step1 from './Step1'

const steps = ['Shopping Bag', 'Shipping Details', 'Payment Options']

const HorizontalLinearStepper = () => {
	const classes = useStyles()
	const [activeStep, setActiveStep] = React.useState(0)
	const [skipped, setSkipped] = React.useState(new Set())

	const isStepSkipped = (step) => {
		return skipped.has(step)
	}

	const handleNext = () => {
		let newSkipped = skipped
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values())
			newSkipped.delete(activeStep)
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1)
		setSkipped(newSkipped)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	return (
		<Box sx={{ width: '100%' }} className={classes.container}>
			<Stepper activeStep={activeStep} className={classes.containerTitle}>
				{steps.map((label) => {
					const stepProps = {}
					const labelProps = {}
					return (
						<Step key={label} {...stepProps}>
							<StepLabel {...labelProps} className={classes.title}>
								{label}
							</StepLabel>
						</Step>
					)
				})}
			</Stepper>
			{activeStep === steps.length ? (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Typography sx={{ mt: 2, mb: 1 }}>{activeStep === 0 ? <Step1/> : 'step2'}</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button
							style={{marginLeft: '4rem'}}
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
              Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />

						<Button variant={'contained'} onClick={handleNext} style={{width: '200px', marginRight: '4rem'}}>
							{activeStep === 0 ? 'Buy' : 'Next'}
						</Button>
					</Box>
				</React.Fragment>
			)}
		</Box>
	)
}

export default HorizontalLinearStepper
