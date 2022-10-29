import { styled } from "@mui/material/styles";
import TableConstructor from "../components/TableConstructor";
import { IconButton, Link } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

// Download icons
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import FolderIcon from "@mui/icons-material/Folder";
import DownloadingIcon from "@mui/icons-material/Downloading";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import SaveIcon from "@mui/icons-material/Save";
import AlbumIcon from "@mui/icons-material/Album";

const Installer = styled(DownloadRoundedIcon)`
  title: "Installer";
`;
const Portable = styled(FolderIcon)`
  title: "Portable";
`;
const Universal = styled(DownloadingIcon)`
  title: "Universal";
`;
const Netinstaller = styled(CloudDownloadIcon)`
  title: "Netinstaller";
`;
const Minimal = styled(InsertDriveFileRoundedIcon)`
  title: "Minimal";
`;
const Full = styled(AlbumIcon)`
  title: "Full";
`;
const Live = styled(SaveIcon)`
  title: "Live";
`;

const icons = {
  Installer: <Installer />,
  Portable: <Portable />,
  Universal: <Universal />,
  Netinstaller: <Netinstaller />,
  Minimal: <Minimal />,
  Full: <Full />,
  Live: <Live />,
};

const database = require("../databases/collection.json");
const headers = ["Icon", "Title", "Version", "Size", <LinkIcon />];
const collection = Object.keys(database).map((name) =>
  [
    <img
      height="25px"
      src={"https://files.x1z53.xlocal.org/collection/" + name + ".svg"}
      alt={name}
    />,
    name,
    database[name]["version"],
    database[name]["type"],
    <Link
      title={database[name]["type"]}
      href={
        "https://files.x1z53.xlocal.org/collection/" + database[name]["file"]
      }
    >
      <IconButton>{icons[database[name]["type"]]} </IconButton>
    </Link>,
  ].map(function (item) {
    let items = [];
    if (typeof item === "string") {
      item = item.split("|");
      for (const value in item) {
        items.push(item[value], <br />);
      }
    } else {
      items = item;
    }
    return items;
  })
);

export default function Collection() {
  return <TableConstructor headers={headers} rows={collection} />;
}
