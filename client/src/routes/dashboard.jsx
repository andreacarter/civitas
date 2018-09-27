// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import MapOutlined from "@material-ui/icons/MapOutlined";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import BankProfile from "views/BankProfile/BankProfile.jsx";
import OrgList from "views/OrgList/OrgList.jsx";
import Branches from "views/Branches/Branches.jsx";
import Goals from "views/Goals/Goals.jsx";
import CRAMap from "views/Maps/CRAMap.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Civitas Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/profile",
    sidebarName: "Bank Profile",
    navbarName: "Bank Profile",
    icon: Person,
    component: BankProfile
  },
  {
    path: "/localorgs",
    sidebarName: "Local Organizations",
    navbarName: "Local Organizations",
    icon: "content_paste",
    component: OrgList
  },
  {
    path: "/branches",
    sidebarName: "Branch Locations",
    navbarName: "Branch Locations",
    icon: LocationOn,
    component: Branches
  },
  {
    path: "/goals",
    sidebarName: "Goals",
    navbarName: "Goals",
    icon: BubbleChart,
    component: Goals
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: MapOutlined,
    component: CRAMap
  },
  { redirect: true, path: "/", to: "/dashboard" }
];

export default dashboardRoutes;
