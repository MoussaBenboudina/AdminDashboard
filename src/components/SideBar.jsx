import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
// eslint-disable-next-line react/prop-types
export default function SideBar({ open, handleDrawerClose }) {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const drawerWidth = 240;

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
    // @ts-ignore
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const theme = useTheme();
  let location = useLocation();
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const sections = [
    {
      text: "Dashboard",
      icons: <HomeOutlinedIcon />,
      path: "/",
    },
    {
      text: "Manage Team",
      icons: <PeopleAltOutlinedIcon />,
      path: "/team",
    },
    {
      text: "Contacts Information",
      icons: <ContactsOutlinedIcon />,
      path: "/contacts",
    },
    {
      text: "Invoices Balances",
      icons: <ReceiptOutlinedIcon />,
      path: "/invoices",
    },
    {
      text: "Profile Form",
      icons: <PersonOutlineOutlinedIcon />,
      path: "/form",
    },
    {
      text: "Calendar",
      icons: <CalendarTodayOutlinedIcon />,
      path: "/calendar",
    },
    {
      text: "FAQ Page",
      icons: <HelpOutlineRoundedIcon />,
      path: "/faq",
    },
    {
      text: "Bar Chart",
      icons: <PollOutlinedIcon />,
      path: "/bar",
    },
    {
      text: "Pie Chart",
      icons: <PieChartOutlineOutlinedIcon />,
      path: "/pie",
    },
    {
      text: "Line Chart",
      icons: <TimelineOutlinedIcon />,
      path: "/line",
    },
    {
      text: "Geography Chart",
      icons: <MapOutlinedIcon />,
      path: "/geography",
    },
  ];

  // const PrimarySection = [
  //   {
  //     text: "Dashboard",
  //     icons: <HomeOutlinedIcon />,
  //     path: "/",
  //   },
  //   {
  //     text: "Manage Team",
  //     icons: <PeopleAltOutlinedIcon />,
  //     path: "/team",
  //   },
  //   {
  //     text: "Contacts Information",
  //     icons: <ContactsOutlinedIcon />,
  //     path: "/contacts",
  //   },
  //   {
  //     text: "Invoices Balances",
  //     icons: <ReceiptOutlinedIcon />,
  //     path: "/invoices",
  //   },
  // ];

  // const SecondarySection = [
  //   {
  //     text: "Profile Form",
  //     icons: <PersonOutlineOutlinedIcon />,
  //     path: "/form",
  //   },
  //   {
  //     text: "Calendar",
  //     icons: <CalendarTodayOutlinedIcon />,
  //     path: "/calendar",
  //   },
  //   {
  //     text: "FAQ Page",
  //     icons: <HelpOutlineRoundedIcon />,
  //     path: "/faq",
  //   },
  // ];

  // const TertiarySection = [
  //   {
  //     text: "Bar Chart",
  //     icons: <PollOutlinedIcon />,
  //     path: "/bar",
  //   },
  //   {
  //     text: "Pie Chart",
  //     icons: <PieChartOutlineOutlinedIcon />,
  //     path: "/pie",
  //   },
  //   {
  //     text: "Line Chart",
  //     icons: <TimelineOutlinedIcon />,
  //     path: "/line",
  //   },
  //   {
  //     text: "Geography Chart",
  //     icons: <MapOutlinedIcon />,
  //     path: "/geography",
  //   },
  // ];

  const navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          width: open ? 80 : 34,
          height: open ? 80 : 34,
          my: 1,
          transition: "0.3s",
          border: "1px solid #999",
        }}
        alt="Remy Sharp"
        src="profile.jpg"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 18 : 0, transition: "0.25s" }}
      >
        B.B.Moussa
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 14 : 0,
          transition: "0.25s",
          fontWeight: 500,
          color: theme.palette.info.main,
          mb: 1,
        }}
      >
        Admin
      </Typography>

      <Divider />

      <List>
        {sections.map((item, index) => (
          <ListItem key={index + 1} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? "" : item.text} placement="right">
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  background:
                    location.pathname == item.path
                      ? theme.palette.mode == "light"
                        ? grey[300]
                        : grey[800]
                      : "",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icons}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>

            {index == 3 || index == 6 ? <Divider /> : ""}
          </ListItem>
        ))}
      </List>

      {/* <List>
        {PrimarySection.map((item, index) => (
          <ListItem key={index + 1} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icons}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {SecondarySection.map((item, index) => (
          <ListItem key={index + 1} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icons}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {TertiarySection.map((item, index) => (
          <ListItem key={index + 1} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icons}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
}
