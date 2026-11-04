import "./emergency-cards.css"
import "../../../public/police-image.jpg"

export default () => {
    return (
        <div className="emergency-cards-container">

            <div className="police">
                <i class="fa-solid fa-shield-halved"></i>
                <div className="cards-medical-main">
                    <p><b>Police <br /> Camp</b></p>
                    <p>300 m away</p>
                </div>
                <button>
                    <i class="fa-solid fa-route btn"></i>&nbsp;
                    Direction
                </button>
            </div>
            <hr />
            <div className="medical">
                <i class="fa-solid fa-briefcase-medical"></i>
                <div className="cards-medical-main">
                    <p><b>Medical <br /> Camp</b></p>
                    <p>800 m away</p>
                </div>
                <button>
                    <i class="fa-solid fa-route btn"></i>&nbsp;
                    Direction
                </button>
            </div>
        </div>
    );
}