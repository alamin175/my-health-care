import assets from '@/assets'
import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
const HeroSection = () => {
	return (
		<Container
			className="h-screen"
			sx={{
				display: 'flex',
				direction: 'row',
				// my: '6px',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					position: 'relative',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						width: '700px',
						top: '-150px',
						left: '-120px',
						justifyContent: 'center',
						alignItems: 'center',
						zIndex: -1,
					}}
				>
					<Image src={assets.svgs.grid} alt="grid image" />
				</Box>
				<Box>
					<Typography variant="h2" fontWeight={600}>
						Healthier Hearts
					</Typography>
					<Typography variant="h2" fontWeight={600}>
						Come From
					</Typography>
					<Typography color="primary.main" variant="h2" fontWeight={600}>
						Preventive Care
					</Typography>
					<Typography sx={{ width: '70%', my: '15px' }}>
						Health is a special element of our life. You can control it by
						increase your food menu or decrease. There are many types of
						health you can see all the time. Take care of it.
					</Typography>
					<Button sx={{ m: '10px' }}>Make Appoinments</Button>
					<Button variant="outlined">Contact Us</Button>
				</Box>
			</Box>
			<Box>
				<Image src={assets.images.doctor1} width={350} alt="doctor image" />
			</Box>
		</Container>
	)
}

export default HeroSection
