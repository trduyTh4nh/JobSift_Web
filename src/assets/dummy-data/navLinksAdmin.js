import "remixicon/fonts/remixicon.css";
import { RiDashboardLine } from 'react-icons/ri';
import { RiHomeLine } from 'react-icons/ri';
// import {RiCommunityLine} from 'react-icons/ri';
// import { RiChatPollLine } from 'react-icons/ri';
import { RiPieChart2Line } from 'react-icons/ri';
import { RiToolsFill } from 'react-icons/ri';
import { RiSettingsLine } from 'react-icons/ri';
import DashBoard from '../dashboard.svg'
import Home from '../home.svg'
import Manage from '../manage.svg'


const navLinksAdmin = [
    {
      path: "/dashboardadmin",
      icon: DashBoard,
      display: "Dashboard",
      name: "dashboard"
    },
    {
      path: "/homeAdmin",
      icon: Home,
      display: "Home",
      name: "home"

    },
    {
        path: "/manage",
        icon: Manage,
        display: "Manage",
      name: "manage"

      },
  ];
  
  export default navLinksAdmin;