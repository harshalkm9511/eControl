import BackBtn from  "../back-botton"

export default () => {
    return (
        <div className="top-navbar">
            <BackBtn/>
            <div className="language-toggle">
                <h2>Services</h2>
            </div>
            <div className="profile">
                <i class="fa-regular fa-circle-user"></i>
            </div>
        </div>
    );
}