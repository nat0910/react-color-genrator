import {useEffect} from "react";

const Popup = ({popupText,popupType,dispatch,closePopup})=>{

    useEffect(() => {
        setTimeout(() => {
            closePopup(dispatch)
        }, 10000 );
    });
    

    return<>
        <div className={`popup ${popupType}`}>
            <p>{popupText}</p>
            <span onClick={()=>closePopup(dispatch)}>&times;</span>
        </div>
    </>
}

export default Popup;