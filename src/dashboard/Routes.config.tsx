import DashboardIcon from '@mui/icons-material/Dashboard';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const RoutesConfig = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        route: "/dashboard"
    },
    {
        title: "Logout",
        icon: <PowerSettingsNewIcon />,
        route: "/logout"
    },
];

export default RoutesConfig;