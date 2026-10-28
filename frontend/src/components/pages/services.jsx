import "./services.css"

export default () => {
    return (
        <div className="container-services">

            <div className="tab">
                <div className="tab-icon">
                    <i className="fa-solid fa-place-of-worship"></i>
                </div>
                <span>Temple</span>
            </div>

            <div className="tab">
                <div className="tab-icon">
                    <i className="fa-solid fa-pills"></i>
                </div>
                <span>Medical</span>
            </div>

            <div className="tab">
                <div className="tab-icon">
                    <i className="fa-solid fa-utensils"></i>
                </div>
                <span>Food</span>
            </div>

            <div className="tab">
                <div className="tab-icon">
                    <i className="fa-solid fa-bed"></i>
                </div>
                <span>Stay</span>
            </div>

            <div className="tab">
                <div className="tab-icon">
                    <i className="fa-solid fa-restroom"></i>
                </div>
                <span>Sanitation</span>
            </div>

            <div className="tab">
                <div className="tab-icon">
                    <i className="fa-solid fa-droplet"></i>
                </div>
                <span>Water</span>
            </div>

            <div className="tab">
                <div className="tab-icon">
                    <i className="fa-solid fa-bus"></i>
                </div>
                <span>Travel</span>
            </div>

        </div>
    );
}