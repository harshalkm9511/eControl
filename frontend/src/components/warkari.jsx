import "./warkari.css"

export default () => {
    return (
        <div>
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
                    <h3>hello</h3>
                </div>
                <div className="bottom-navbar">
                    <div className="navbar-icons">
                        <i class="fa-regular fa-house"></i>
                        <i class="fa-solid fa-layer-group"></i>
                        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-map-location-dot"></i>
                        <i class="fa-regular fa-bell"></i>
                    </div>
                </div>
            </div>

        </div>
    );
}