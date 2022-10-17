import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { formatString } from '../functions';
import { sections } from '../config';


export default function Sidebar() {
	return (
		<List>
			<ListItem key='main_page' disablePadding>
				<ListItemButton href='/'>
					<ListItemText>Main Page</ListItemText>
				</ListItemButton>
			</ListItem>
			{sections.map(([title, description, stringFormatParametrs]) => (
				<ListItem key={title} disablePadding>
					<ListItemButton title={description} href={'/' + title}>
						<ListItemText>{formatString(title, stringFormatParametrs)}</ListItemText>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	)
}
