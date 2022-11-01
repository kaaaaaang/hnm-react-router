import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = ({authenticate, setAuthenticate}) => {
    const menuList = [
      "여성",
      "Divided",
      "남성",
      "신생아/유아",
      "아동",
      "H&M HOME",
      "Sale",
      "지속가능성",
    ];
    let [sideMenuHide, setSideMenuHide] = useState(true);
    let navigate = useNavigate();

    const goToLogin =()=>{
        navigate('/login');
    };

    const search =(e)=>{
        if(e.key === "Enter") {
            let keyWord = e.target.value;
            navigate(`/?q=${keyWord}`);
        }
    };
    
    return (
      <div>
         <div className={`side-menu${sideMenuHide? " hide":""}`}>
          <button className="closebtn" onClick={()=>setSideMenuHide(true)}>
            &times;
          </button>
          <div className="side-menu-list" id="menu-list">
            {menuList.map((menu, index) => (
              <button key={index}>{menu}</button>
            ))}
          </div>
        </div>
        <div className="nav-header">
          <div className="burger-menu">
            <FontAwesomeIcon icon={faBars} onClick={()=>setSideMenuHide(false)} />
          </div>
          {
              authenticate ? (
                <div className='login-button' onClick={()=>setAuthenticate(false)}>
                  <FontAwesomeIcon icon={faUser} />
                  <span>로그아웃</span>
                </div>
              ) : (
                <div className='login-button' onClick={()=>goToLogin()}>
                  <FontAwesomeIcon icon={faUser} />
                  <span>로그인</span>
                </div>
              )
          }
        </div>
  
        <div className="nav-logo">
            <img
              width={100}
              src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
            />
        </div>
        <div className="nav-menu-area">
          <ul className="menu">
            {menuList.map((menu, index) => (
              <li key={index}> 
                <a href="#">
                  {menu}
                </a>
              </li>
            ))}
          </ul>
  
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input
                type="text"
                placeholder="제품검색"
                onKeyPress={(e)=>search(e)}
            />
          </div>
        </div>
      </div>
    );
 };

export default NavBar;
