import { styled } from '@mui/material/styles';
import TableConstructor from './TableConstructor';

import LinkIcon from '@mui/icons-material/Link';
// Download icons
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import FolderIcon from '@mui/icons-material/Folder';
import DownloadingIcon from '@mui/icons-material/Downloading';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import SaveIcon from '@mui/icons-material/Save';
import AlbumIcon from '@mui/icons-material/Album';

const unformated_list = require('../backend/collection.json')

const Installer = styled(DownloadRoundedIcon)`title: 'Installer'`;
const Portable = styled(FolderIcon)`title: 'Portable'`;
const Unversal = styled(DownloadingIcon)`title: 'Universal'`;
const Netinstaller = styled(CloudDownloadIcon)`title: 'Netinstaller'`;
const Minimal = styled(InsertDriveFileRoundedIcon)`title: 'Minimal'`;
const Full = styled(AlbumIcon)`title: 'Full'`;
const Live = styled(SaveIcon)`title: 'Live'`;

function format_list(dict) {
	var full_list = []
	for (const key of Object.keys(dict)) {
		full_list.push([key,
			typeof dict[key] === 'object' && !Array.isArray(dict[key]) ? (
				format_list(dict[key])
			) : (
				[dict[key]]
			)
		])
	}

	return full_list
}

const rows = format_list(unformated_list)

const headers = ['Icon', 'Title', 'Version', 'Size', <LinkIcon />];

export default function Collection() {return (
	<TableConstructor headers={headers} rows={rows} />
);}
