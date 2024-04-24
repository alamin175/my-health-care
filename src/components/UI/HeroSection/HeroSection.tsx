import assets from '@/assets'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
const HeroSection = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				direction: 'row',
				my: '10px',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					position: 'relative',
					flex: 1,
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						width: '700px',
						top: '-50px',
						left: '-120px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Image src={assets.svgs.grid} alt="grid image" />
				</Box>
				<Box>
					<Typography variant="h2">Healthier Hearts</Typography>
					<Typography variant="h2">Come From</Typography>
					<Typography color="primary.main" variant="h2">
						Preventive Care
					</Typography>
				</Box>
			</Box>
			<Box>Right</Box>
		</Container>
	)
}

export default HeroSection
