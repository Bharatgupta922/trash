import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
function Header() {

const [{basket , user} , dispatch] = useStateValue();
const handleAuthentication = ()=>{
    if(user){
        auth.signOut();
    }
};

// http://pngimg.com/uploads/amazon/amazon_PNG11.png
// http://pngimg.com/uploads/vase/vase_PNG174.png
    return (
<div className = 'header'>
    <Link to = "/">

    <img className = "header__logo"
                  src="https://qwdrlxxyyztovhjybwfz.supabase.co/storage/v1/object/sign/Images/onlinelogomaker-052121-1455-6559-2000-transparent.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvb25saW5lbG9nb21ha2VyLTA1MjEyMS0xNDU1LTY1NTktMjAwMC10cmFuc3BhcmVudC5wbmciLCJpYXQiOjE2MjE1ODkyNjMsImV4cCI6MTkzNjk0OTI2M30.OFH-tezgoUu4mUuyIJw-K0kq50xDhprLp3HxJTqCZt4"
                  alt="potshop"
    />
    </Link>

            <div className="header__search">
                  {/* <input
                  className = "header__searchInput" 
                  type="text"
                /> */}
                {/* <SearchIcon className = "header__searchIcon"/> */}
                #Stand-Up For local
            </div>
    <div className="header__nav">
        <Link to = {!user && '/login'} >
            <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello {user? user.email : 'guest'}</span>
                    <span className="header__optionLineTwo">{user?'Sign Out' : 'Sign In'}</span>
            </div>
        </Link>     
            {/* <div className="header__option"> 
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
            </div>     
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>   */}
            <Link to = "/checkout">
            <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
            </Link>   
        
    </div> 
</div>
    )
}

export default Header;
