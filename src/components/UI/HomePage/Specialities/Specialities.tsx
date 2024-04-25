import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'

const Specialities = async () => {
	const res = await fetch('http://localhost:5000/api/v1/specialties', {
		next: {
			revalidate: 30,
		},
	})
	const { data: specialties } = await res.json()
	// console.log(specialties)
	return (
		<Container>
			<Box sx={{ margin: '40px 0', textAlign: 'center' }}>
				<Box sx={{ textAlign: 'start' }}>
					<Typography variant="h4" fontWeight={550}>
						Explore Treatments across specialties
					</Typography>
					<Typography
						component="p"
						margin="5px 0"
						fontSize={20}
						fontWeight={600}
						color="gray"
					>
						Find experienced doctors across all specialties
					</Typography>
				</Box>
				<Stack direction="row" gap={4} mt={6}>
					{specialties.map((special: any) => (
						<Box
							key={special.id}
							sx={{
								flex: 1,
								width: '150px',
								backgroundColor: 'rgba(245, 245, 245,1)',
								border: '1px solid rgba(250, 250, 250, 1)',
								borderRadius: '10px',
								textAlign: 'center',
								padding: '40px 10px',
								'& img': {
									width: '50px',
									height: '50px',
									margin: '0 auto',
								},
								'&:hover': {
									border: '1px solid rgba(36, 153, 239, 1)',
									cursor: 'pointer',
									transition: 'all 0.5s',
								},
							}}
						>
							<Image
								src={special?.icon}
								alt="speciality"
								width={100}
								height={100}
							/>
							<Box>
								<Typography
									component="p"
									fontWeight={600}
									fontSize={18}
									mt={2}
								>
									{special.title}
								</Typography>
							</Box>
						</Box>
					))}
				</Stack>

				<Button variant="outlined" sx={{ mt: '20px' }}>
					See More
				</Button>
			</Box>
		</Container>
	)
}

export default Specialities
