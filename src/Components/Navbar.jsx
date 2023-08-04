import React from 'react'
import "./Navbar.css"
import { useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {

    const [isSmallerThan950] = useMediaQuery("(max-width: 950px)");
    const [isSmallerThan650] = useMediaQuery("(max-width: 650px)");


    return (
        <>
            {!isSmallerThan650 ?
                <div className='Nav'>

                    <div className='Navbar'>

                        <div className='nav-item-1'>
                            <p>Login</p>
                            <p>WallCreators</p>
                            <p>Features</p>
                            <p>Testimonials</p>
                            <p>ContactUs</p>
                        </div>

                        <div className='nav-item-2'>
                            <button>Get Started for free</button>
                        </div>
                    </div>
                </div>
                :
                <div class="nav">
                    <input type="checkbox" id="nav-check" />
                    
                    <div class="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div class="nav-links">
                        <div>Login</div>
                        <div>WallCreators</div>
                        <div>Features</div>
                        <div>Testimonials</div>
                        <div>Contact Us</div>
                        <div className='nav-item-23'>
                            <button>Get Started for free</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar


{/* <div class="header">
<input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
            <li>codewithshobhit<span>Web Developer</span></li>
            <li><a href="https://vanila.io" target="_blank">Company</a></li>
            <li><a href="https://instagram.com/plavookac" target="_blank">Instagram</a></li>
            <li><a href="https://twitter.com/plavookac" target="_blank">Twitter</a></li>
            <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">YouTube</a></li>
            <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a></li>
        </ul>
    </div>
    <div id='center' class="main center">
        <div class="mainInner">
            <div>PURE CSS SIDEBAR TOGGLE MENU</div>
        </div>
        <div class="mainInner">
            <div>PURE CSS SIDEBAR TOGGLE MENU</div>
        </div>
        <div class="mainInner">
            <div>PURE CSS SIDEBAR TOGGLE MENU</div>
        </div>
    </div>
    </div> */}