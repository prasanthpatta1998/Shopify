import { useState } from "react";
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import { AiOutlineDown } from "react-icons/ai";
import './index.css'

const Navbar = () => {
    const [icon, setIconValue] = useState(false)
    console.log(icon)
    return(
        <>
        <nav className="nav-container">
            <div className="image-container">
            <img src="https://res.cloudinary.com/duezhxznc/image/upload/v1694487893/Screenshot_2023-09-12_083309-removebg-preview_alnnod.png" alt="shopify" className="nav-image"/>
            <div className="div-item">
                <p className="nav-elements">Solutions</p>
                <AiOutlineDown />
            </div>
            <div className="div-item"><p className="nav-elements">Pricing</p></div>
            <div className="div-item">
                <p className="nav-elements">Resources</p>
                <AiOutlineDown />
                
            </div>
            </div>
            <div className="hamburger-container">
            <p className="login">Log in</p>
            <a className="hyperlink" href="https://drive.google.com/file/d/10uAg69gYUShr-tNooZe8mIkChdyvAVLP/view">Start free trail</a>
            {icon ? (<button className="hamburger-button" onClick={(prevState) => setIconValue(!icon)}>
            <RxCross2 className="hamburger-icon"/>
            </button>): (<button className="hamburger-button" onClick={(prevState) => setIconValue(!icon)}>
            <RxHamburgerMenu className="hamburger-icon"/>
            </button>)}
            </div>
        </nav>
        {
            icon && (
                <ul className="ul-container">
                    <li className="li-item">
                        <p className="nav-elements">Solutions</p>
                        <AiOutlineDown />
                    </li>
                    <li className="li-item">Pricing</li>
                    <li className="li-item">
                        <p className="nav-elements">Resources</p>
                        <AiOutlineDown />
                       
                    </li>
                </ul>
            )
        }
        </>
    )
}
export default Navbar