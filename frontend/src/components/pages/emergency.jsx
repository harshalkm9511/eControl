import "./emergency.css"


export default () => {
    return (
        <div className="emergency-page-container">
            <div className="select-call-buttons">
                <p>What kind of help ?</p>
                <select name="emergencyType" id="emergencyType">
                    <option value="police">Police(100)</option>
                    <option value="emergency">Emergency(112)</option>
                    <option value="medical">Medical(108)</option>
                    <option value="fire">Fire(101)</option>
                    <option value="lostPerson">Lost Person (100)</option>
                    <option value="notSure">Not Sure</option>
                </select>
                <button>
                    <i class="fa-solid fa-phone-volume"></i>
                    Call (112)
                </button>
            </div>

            <div className="circular-sos" id="circular-sos">
                <p>SOS</p>
            </div>

            <div className="other-details-textarea">
                <label htmlFor="emergency-details">Add details (Optional)</label><br />
                <textarea name="emergency-details" id="emergency-details" placeholder="Descript what is happening"></textarea>
            </div>
        </div>
    );
}