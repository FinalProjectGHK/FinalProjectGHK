import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './DrawerComponent.module.css';

const DrawerComponent = ({ isOpen, toggleDrawer }) => {
	return (
		<div className={styles.menuContainer}>
			<IconButton onClick={toggleDrawer(true)} className={styles.menuButton}>
				<MenuIcon />
			</IconButton>
			<Drawer 
			anchor="right" 
			open={isOpen} 
			onClose={toggleDrawer(false)}
			classes={{ paper: styles.drawerPaper }}
			>
				<div
					className={styles.sidebar}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<Link to="/login">會員登入</Link>
					<Link to="/register">會員登記</Link>
					<Link to="/account">帳戶資料</Link>
					<Link to="/record">訂單紀錄</Link>
					<Link to="/location">分店位置</Link>
					<Link to="/about">關於我們</Link>
				</div>
			</Drawer>
		</div>
	);
};

export default DrawerComponent;