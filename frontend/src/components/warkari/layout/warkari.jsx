    import "./warkari.css"
    import BottomNav from "../../layout/navbars/navbar.botton-nav"
    import {Outlet} from "react-router";
    export default () => {
        
        return (
            
            <div className="warkari-page">
                
                <div className="top-navbar">
                    <div className="language-toggle">
                        <h3>Hi, Welcome to eControl</h3>
                        <p>Good morning</p>
                    </div>
                    <div className="profile">
                        <i class="fa-regular fa-circle-user"></i>
                    </div>
                </div>

                <div className="main">
                    <div className="main-content">
                        <Outlet/>
                        <BottomNav/>
                    </div>
                    
                </div>

            </div>
        );
    }