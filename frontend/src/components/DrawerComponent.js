import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import styles from './DrawerComponent.module.css'; 

export default function DrawerComponent() {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setIsOpen(open);
	};

	const menuItems = [
		{ text: '會員登入', path: '/login', icon: <VpnKeyIcon /> },
		{ text: '會員登記', path: '/register', icon: <GroupAddIcon /> },
		{ text: '帳戶資料', path: '/account', icon: <ManageAccountsIcon /> },
		{ text: '訂單紀錄', path: '/record', icon: <ContentPasteIcon /> },
		{ text: '分店位置', path: '/location', icon: <LocationOnIcon /> },
		{ text: '關於我們', path: '/about', icon: <InfoIcon /> },
	];

	return (
		<div className={styles.menuContainer}>
			<IconButton onClick={toggleDrawer(true)} className={styles.menuButton}>
				<MenuIcon />
			</IconButton>
			<Drawer
				anchor="right"
				open={isOpen}
				onClose={toggleDrawer(false)}
				classes={{ paper: styles.drawerPaper }} // Apply custom CSS class
			>
				<Box
					className={styles.sidebar}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<List>
						{menuItems.map((item) => (
							<ListItem key={item.text} disablePadding>
								<ListItemButton component={Link} to={item.path}>
									<ListItemIcon sx={{ color: '#705b38',  fontSize: '30px' }}>
										{item.icon}</ListItemIcon>
									<ListItemText primary={item.text}  sx={{ color: '#705b38'}}
									primaryTypographyProps={{ fontSize: '25px' }} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</div>
	);
}



// import * as React from 'react';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import styles from './DrawerComponent.module.css'; // Import your CSS module

// export default function DrawerComponent() {
// 	const [isOpen, setIsOpen] = React.useState(false);

// 	const toggleDrawer = (open) => (event) => {
// 		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
// 			return;
// 		}
// 		setIsOpen(open);
// 	};

// 	const list = () => (
// 		<Box
// 			className={styles.sidebar}
// 			role="presentation"
// 			onClick={toggleDrawer(false)}
// 			onKeyDown={toggleDrawer(false)}
// 		>
// 			<List>
// 				{[
// 					{ text: '會員登入', path: '/login' },
// 					{ text: '會員登記', path: '/register' },
// 					{ text: '帳戶資料', path: '/account' },
// 					{ text: '訂單紀錄', path: '/record' },
// 					{ text: '分店位置', path: '/location' },
// 					{ text: '關於我們', path: '/about' },
// 				].map((item) => (
// 					<ListItem key={item.text} disablePadding>
// 						<ListItemButton component={Link} to={item.path}>
// 							<ListItemText primary={item.text} />
// 						</ListItemButton>
// 					</ListItem>
// 				))}
// 			</List>
// 		</Box>
// 	);

// 	return (
// 		<div className={styles.menuContainer}>
// 			<IconButton onClick={toggleDrawer(true)} className={styles.menuButton}>
// 				<MenuIcon />
// 			</IconButton>
// 			<Drawer
// 				anchor="right"
// 				open={isOpen}
// 				onClose={toggleDrawer(false)}
// 				classes={{ paper: styles.drawerPaper }} // Apply custom CSS class
// 			>
// 				{list()}
// 			</Drawer>
// 		</div>
// 	);
// }