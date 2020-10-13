import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import AddToDo from '../todo/AddToDo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    color: '#ffffff',
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.navLinks}>
              ToDo
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="alltodos" className={classes.navLinks}>
              Show All ToDos
            </Link>
          </Typography>
          <AddIcon onClick={handleClickOpen} />
          <AddToDo open={open} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
