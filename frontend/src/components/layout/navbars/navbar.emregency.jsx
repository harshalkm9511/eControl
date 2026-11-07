import BackBtn from  "../back-botton.jsx"

export default () => {
    return (
        <div className="top-navbar">
            <BackBtn/>
            <div className="language-toggle">
                <h2>Emergency</h2>
            </div>
            <div className="profile">
                <i class="fa-regular fa-circle-user"></i>
            </div>
        </div>
    );
}