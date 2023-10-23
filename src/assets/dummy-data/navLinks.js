import dashboardImg from '../../assets/images/dashboard.svg';
import MyprofileImg from '../../assets/images/iconMyProfile.svg';
import myCompanyImg from '../../assets/images/iconMyCompany.svg';
import listPostImg from '../../assets/images/iconListPost.svg';
import statisticalImg from '../../assets/images/statistical.svg';
import accountImg from '../../assets/images/account.svg';


const navLinks = [
    {
      path: "/dashboard",
      icon: dashboardImg,
      display: "Dashboard",
    },
    {
      path: "/myProfile",
      icon: MyprofileImg,
      display: "MyProfile",
    },
    {
      path: "/myCompany",
      icon: myCompanyImg,
      display: "MyCompany",
    },
    {
      path: "/listPost",
      icon: listPostImg,
      display: "ListPost",
    },
    {
      path: "/statistical",
      icon: statisticalImg,
      display: "Statistical",
    },
    {
      path: "/accountSettings",
      icon: accountImg,
      display: "Account Settings",
    },
  ];
  
  export default navLinks;