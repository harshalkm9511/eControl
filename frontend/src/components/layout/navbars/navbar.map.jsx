import BackBtn from  "../back-botton"

export default () => {
    return (
        <div className="top-navbar">
            <BackBtn/>
            <div className="language-toggle">
                <p style={{fontSize:"20px"}}>Map</p>
            </div>
            <div className="profile">
                <i class="fa-regular fa-circle-user"></i>
            </div>
        </div>
    );
}