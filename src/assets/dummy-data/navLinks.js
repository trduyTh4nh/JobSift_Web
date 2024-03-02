import dashboardImg from '../../assets/images/dashboard.svg';
import MyprofileImg from '../../assets/images/iconMyProfile.svg';
import myCompanyImg from '../../assets/images/iconMyCompany.svg';
import listPostImg from '../../assets/images/iconListPost.svg';
import statisticalImg from '../../assets/images/statistical.svg';
import accountImg from '../../assets/images/account.svg';
import myWalletImg from '../../assets/images/myWallet.svg';


const navLinks = [
    {
      path: "/dashboard",
      icon: dashboardImg,
      display: "Dashboard",
      name: "dashboard-tester"
    },
    {
      path: "/myProfile",
      icon: MyprofileImg,
      display: "Hồ sơ",
    },
    {
      path: "/myCompany",
      icon: myCompanyImg,
      display: "Công ty",
    },
    {
      path: "/listPost",
      icon: listPostImg,
      display: "Bài đăng",
    },
    {

      path: "/statistical",
      icon: statisticalImg,
      display: "Thống kê",

    },
    // {
    //   path: "/myWallet",
    //   icon: myWalletImg,
    //   display: "My Wallet",
    // },
  ];
  
  export default navLinks;