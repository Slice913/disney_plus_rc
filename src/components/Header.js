import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
     <Nav>
        <Logo src="/DisImages/logo.svg"/>
        <NavMenu>
            <a href="">
                <img src="/DisImages/home-icon.svg"/>
                <span>HOME</span>
            </a>
            <a href="">
                <img src="/DisImages/search-icon.svg"/>
                <span>SEARCH</span>
            </a>
            <a href="">
                <img src="/DisImages/watchlist-icon.svg"/>
                <span>WATCHLIST</span>
            </a>
            <a href="">
                <img src="/DisImages/original-icon.svg"/>
                <span>ORIGINALS</span>
            </a>
            <a href="">
                <img src="/DisImages/movie-icon.svg"/>
                <span>MOVIES</span>
            </a>
            <a href="">
                <img src="/DisImages/series-icon.svg"/>
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserImg src="/DisImages/profileImg.jpeg"/>
     </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
    
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    algin-items: center;
    padding-left: 50px;
    overflow-x: hidden;

    a {
       display: flex;
       align-items: center;
       padding: 0 12px;
       cursor: pointer;
       text-decoration: none;
    
       img {
           height: 20px;
       }

       span {
           font-size: 13px;
           letter-spacing: 1.42px;
           position: relative;
           color: white;
       
            &:after {
                content: "";
                width: 100%;
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
                
            }
        }

    }
    
`

 const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    justify-content: flex-end;
 `