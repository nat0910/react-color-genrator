   import Values from "values.js";

   const reducer = (state,action)=>{

        if (action.type === 'EMPTY_FEILD') {
            return {
                ...state,
                popupShow   :   true,
                popupText   :   '⚠️ Please enter a proper hex color or rgb color code !!',
                popupType  :   'danger'
            }
        }
        if (action.type === 'COMPILED_DATA') {
            return {
                ...state,
                colorList : action.payload,
                popupShow : false,
                popupText : ''
            }
        }
        if (action.type === 'ON_STARTUP') {
            return{
                ...state,
                colorList : new Values("#f85989").all(10) 
            }
        }
        if (action.type === 'HEX_COPY') {
            return {
                ...state,
                popupText  :  'Hex code copied to clipboard !! 😊',
                popupShow  :   true,
                popupType  :   'sucess'
            }
        }
        if (action.type === 'CLOSE_POPUP') {
            return{
                ...state,
                popupText : ' ',
                popupShow : false
            }
        }
    }

    export default reducer;