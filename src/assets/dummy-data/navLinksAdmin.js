import "remixicon/fonts/remixicon.css";
import { RiDashboardLine } from 'react-icons/ri';
import { RiHomeLine } from 'react-icons/ri';
// import {RiCommunityLine} from 'react-icons/ri';
// import { RiChatPollLine } from 'react-icons/ri';
import { RiPieChart2Line } from 'react-icons/ri';
import { RiToolsFill } from 'react-icons/ri';
import { RiSettingsLine } from 'react-icons/ri';


const navLinksAdmin = [
    {
      path: "/dashboardadmin",
      icon: <RiDashboardLine/>,
      display: "Dashboard",
    },
    {
      path: "/homeAdmin",
      icon: <RiHomeLine/>,
      display: "Home",
    },
    {
        path: "/manage",
        icon: <RiToolsFill/>,
        display: "Manage",
      },
  ];
  
  export default navLinksAdmin;