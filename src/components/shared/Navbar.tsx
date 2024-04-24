import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'

const Navbar = () => {
	return (
		<Container>
			<Stack
				py={2}
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography variant="h4" component={Link} href="/" fontWeight={600}>
					My{' '}
					<Box component="span" color="primary.main">
						Health
					</Box>{' '}
					Care
				</Typography>
				<Stack direction="row" gap={4}>
					<Typography component={Link} href="/consultation">
						Consultation
					</Typography>
					<Typography component={Link} href="/healthplan">
						Health Plans
					</Typography>
					<Typography component={Link} href="/medicines">
						Medicines
					</Typography>
					<Typography component={Link} href="/diagnostics">
						Diagnostics
					</Typography>
					<Typography component={Link} href="/ngo">
						NGO
					</Typography>
				</Stack>

				<Link href="/login">
					<Button>Login</Button>
				</Link>
			</Stack>
		</Container>
	)
}

export default Navbar
