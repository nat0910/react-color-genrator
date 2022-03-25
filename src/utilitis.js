const hoverIn = (index)=>{
    let element = document.getElementsByClassName('copy')[index];
    element.style.opacity = 1;
}

const hoverOut = (index)=>{
    let element = document.getElementsByClassName('copy')[index];
    element.style.opacity = 0;
}

const clipBoard = (hexval,dispatch)=>{
    navigator.clipboard.writeText(hexval);
    dispatch({type:'HEX_COPY'});
}


const closePopup= (dispatch)=>{
    dispatch({type:'CLOSE_POPUP'})
}

export { hoverIn , hoverOut , clipBoard , closePopup};