import { Box, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
	return (
		<Box bgcolor="#000225" py={4}>
			<Stack
				direction="row"
				gap={4}
				justifyContent="center"
				alignItems="center"
			>
				<Typography component={Link} href="/consultation" color="white">
					Consultation
				</Typography>
				<Typography component={Link} href="/healthplan" color="white">
					Health Plans
				</Typography>
				<Typography component={Link} href="/medicines" color="white">
					Medicines
				</Typography>
				<Typography component={Link} href="/diagnostics" color="white">
					Diagnostics
				</Typography>
				<Typography component={Link} href="/ngo" color="white">
					NGO
				</Typography>
			</Stack>
			<Stack
				direction="row"
				gap={2}
				justifyContent="center"
				alignItems="center"
				pt={2}
				color="white"
			>
				<Link
					target="blank"
					href="https://www.facebook.com/profile.php?id=100024270469893"
				>
					<FacebookIcon fontSize="large" />
				</Link>
				<Link target="blank" href="https://twitter.com/al_amin175">
					<TwitterIcon fontSize="large" />
				</Link>
				<Link target="blank" href="https://www.instagram.com/mdalaminh052">
					<InstagramIcon fontSize="large" />
				</Link>
				<Link
					target="blank"
					href="https://www.linkedin.com/in/md-al-amin-6ba828244/"
				>
					<LinkedInIcon fontSize="large" />
				</Link>
			</Stack>
			<div className="border-2 m-10 border-dashed"></div>
			<Container>
				<Stack
					justifyContent="space-between"
					direction="row"
					alignItems="center"
				>
					<Typography color="white">
						@2024 My Health Care. All Righ Reserved.
					</Typography>
					<Typography variant="h4" color="white">
						My{' '}
						<Box component="span" color="primary.main" fontWeight={600}>
							{' '}
							Health
						</Box>{' '}
						Care
					</Typography>
					<Typography color="white">
						Privacy Policy | Terms & Condition
					</Typography>
				</Stack>
			</Container>
		</Box>
	)
}

export default Footer
