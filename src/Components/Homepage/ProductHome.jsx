import './ProductHome.css'
import { NavLink } from 'react-router-dom';
import Router from '../../routes/Router'
import HomenavLinks from '../../assets/dummy-data/HomenavLinks.js';
import Signin from './Signin'
import Signup from './Signup'


const Homepage = () =>{
    return(
        <div className="Homepage">
            <div className='Homepage_layout'>
            <h2 className='logo'>JS</h2>
            <div className='Homepage_sty'>
          <ul className='Homepage_nav__list'>
            {
              HomenavLinks.map((item, index)=>(
                <li className='Homepage_nav__item' key={index}>
                  <NavLink style={{fontSize: 30, marginLeft: 50}} to={item.path}>
                    <span>
                      <i className={item.icon}></i>
                    </span> {" "}
                    {item.display}
                  </NavLink></li>
              ))
            }
            <div className='button_sty'>
                <Signin/>
                <Signup/>
            </div>  
          </ul>     
            </div>
          </div>
          <Router/>
        </div>
        
    )
}
export default Homepage;