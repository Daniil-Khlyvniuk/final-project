import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useStyles } from './styles'
import Step1 from '../PayCard/Steps/Step1'
import Checkout from '../PayCard/checkout'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CheckoutForm from '../PayCard/CheckoutForm'
import { Container } from '@mui/material'


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
			<Box sx={{
				backgroundColor: '#373F41',
			}}>
				<Stepper
					activeStep={activeStep}
					className={classes.containerTitle}
					sx={{
						maxWidth: '1280px',
						margin: 'auto',
					}}
				>

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
			</Box>

			{activeStep === steps.length && (
				<>
					<Typography sx={{ mt: 2, mb: 1 }}>
						All steps completed - you&apos;re finished
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</>
			)}
			{activeStep === 0 && (
				<>
					<Box
						sx={{ mt: 2, mb: 1 }}
					>
						{activeStep === 0 && <Step1 />}
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button
							style={{ marginLeft: '4rem' }}
							color="inherit"
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}
						>
							Back
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />

						<Button variant={'contained'} onClick={handleNext} style={{ width: '200px', marginRight: '4rem' }}>
							NEXT
						</Button>
					</Box>
				</>
			)}
			{activeStep === 1 && (
				<Container
					sx={{
						maxWidth: 1310,
						margin: '0 auto'
					}}
				>
					<Box
						sx={{ mt: 2, mb: 1 }}
					>
						{activeStep === 1 && <CheckoutForm
							handleBack={handleBack}
							handleNext={handleNext} />}
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
					</Box>
				</Container>
			)}
			{activeStep === 2 && (
				<Container
					sx={{
						maxWidth: 1310,
						margin: '0 auto'
					}}
				>
					<Box
						sx={{ mt: 2, mb: 1 }}
					>
						{activeStep === 2 && <Checkout />}
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button
							variant="text"
							sx={{
								marginLeft: '5rem',
								fontSize: '18px',
								color: '#373F41',
							}}
							disabled={activeStep === 0}
							onClick={handleBack}
						><ArrowBackIosNewIcon
								sx={{
									height: '17px',
								}}
							/> BACK</Button>
						<Box sx={{ flex: '1 1 auto' }} />
					</Box>
				</Container>
			)}
		</Box>
	)
}

export default HorizontalLinearStepper
