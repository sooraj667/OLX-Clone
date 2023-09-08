import React, {useContext} from 'react';
import {useHistory,Link} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, firebaseContext} from '../../store/Contexts';
function Header() {


  const {user} = useContext(AuthContext); 
  const {firebase} = useContext(firebaseContext);
  const history = useHistory();




  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span style={{marginRight:"10px",marginLeft:"10px",fontWeight:"400",}} >{user?`Welcome ${user.displayName}`:<Link style={{cursor:"pointer", color:"Black"}} to="/login">Login</Link>}</span>
   
          <hr />
        </div>
        {user && <span style={{cursor:"pointer"}} onClick={()=>{

          firebase.auth().signOut();
          history.push('/')
        }}>Logout</span>}

        <div className="sellMenu">
          <Link to="/create"><SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
