import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import FolderIcon from "@material-ui/icons/Folder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ProfilePicture from "../../images/ProfilePicture.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { MyContext } from "../../Provider";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  image: {
    marginTop: "30px",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  ButtonAppBar: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inline",
    },
  },

  title: {
    flexGrow: 1,
    paddingRight: "30pt",
  },
  appBar: {
    backgroundColor: "#eee",
  },
  profile: {
    textAlign: "center",
  },
}));

const icons = [
  <AccountCircleIcon />,
  <FolderIcon />,
  <AssignmentIcon />,
  <MailIcon />,
];

var selectedItem = [0, 1, 0, 0];

function NavBar(props) {
  const { pathname } = props.location;
  console.log(pathname);

  if (pathname === "/about") {
    selectedItem = [1, 0, 0, 0];
  }

  if (pathname === "/contact") {
    selectedItem = [0, 0, 0, 1];
  }

  if (pathname === "/cv") {
    selectedItem = [0, 0, 1, 0];
  }
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isNav = props.isNav;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleClick = (i, e) => {
    selectedItem = [0, 0, 0, 0];
    if (selectedItem[i] === 1) {
      handleDrawerClose();
      return;
    }
    selectedItem[i] = 1;
    if (i === 0) {
      props.history.push("/about");
      handleDrawerClose();
      return;
    }
    if (i === 1) {
      props.history.push("/projects");
      handleDrawerClose();
      return;
    }
    if (i === 2) {
      props.history.push("/cv");
      handleDrawerClose();
      return;
    }
    if (i === 3) {
      props.history.push("/contact");
      handleDrawerClose();
      return;
    }
    handleDrawerClose();
  };

  const mobileAppBar = (
    <div className={classes.ButtonAppBar}>
      <AppBar color="transparent" position="static">
        <Toolbar className={classes.appBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Mohamed's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );

  const drawer = (
    <div>
      <div className={classes.profile}>
        <img
          src={ProfilePicture}
          width="180px"
          className={classes.image}
          alt="Profile"
        />
        <Typography variant="h6">Mohamed Akbarally</Typography>

        <Typography>mohamed.akbarally@gmail.com</Typography>
      </div>
      <br />
      <Divider />
      <List>
        {["About Me", "Projects", "CV", "Contact"].map((text, index) => (
          <div>
            <ListItem
              button
              key={text}
              onClick={() => handleClick(index)}
              selected={selectedItem[index]}
            >
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            open
            variant="permanent"
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            {context.state.card == -1 ? mobileAppBar : <React.Fragment />}
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
  );
}

NavBar.propTypes = {
  container: PropTypes.any,
};

export default withRouter(NavBar);
