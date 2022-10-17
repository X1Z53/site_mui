import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Grid
} from '@mui/material';
import { formatString } from '../functions';
import { sections } from '../config';


export default function Main() {return (
	<Grid sx={{ flexGrow: 1 }} justifyContent='center' container spacing={5}>
		{sections.map(([title, description, titleFormatParametrs], index) => (
			<Grid item xs={12} sm={6} md={4}>
				<Card sx={{ textAlign: 'center' }}>
					<CardActionArea href={'/' + title}>
						<CardContent>
							<Typography gutterBottom variant='h4' component='div'>
								{formatString(title, titleFormatParametrs)}
							</Typography>
							<Typography sx={{ fontStyle: 'italic' }} variant='body1'>
								{description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		))}
	</Grid>
);}
