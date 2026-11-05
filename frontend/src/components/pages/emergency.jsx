import "./emergency.css"
import { useState } from "react"

export default () => {
    const [emgType, setEmgType] = useState(100);
    const setType = (event) => {
        event.preventDefault();
        const type = event.target.value;
        if(type === "police"){
            setEmgType(100);
        }else if(type === "emergency"){
            setEmgType(112);
        }else if(type === "medical"){
            setEmgType(108);
        }else if(type === "fire"){
            setEmgType(101);
        }else if(type === "lostPerson"){
            setEmgType(100);
        }else if(type === "notSure"){
            setEmgType(112);
        }
    }

    return (
        <div className="emergency-page-container">
            <div className="select-call-buttons">
                <p>What kind of help ?</p>
                <select name="emergencyType" id="emergencyType" onChange={setType}>
                    <option value="police">Police</option>
                    <option value="emergency">Emergency</option>
                    <option value="medical">Medical</option>
                    <option value="fire">Fire</option>
                    <option value="lostPerson">Lost Person </option>
                    <option value="notSure">Not Sure</option>
                </select>
                <button>
                    <i class="fa-solid fa-phone-volume"></i>
                    Call ({emgType})
                </button>
            </div>

            <div className="circular-sos" id="circular-sos">
                <p>SOS</p>
            </div>

            <div className="other-details-textarea">
                <label htmlFor="emergency-details">Add details (Optional)</label><br />
                <textarea name="emergency-details" id="emergency-details" placeholder="Describe what is happening"></textarea>
            </div>
        </div>
    );
}