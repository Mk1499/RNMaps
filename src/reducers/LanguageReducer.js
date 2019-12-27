const intialState = {
    language: 'AR'
}

export default languageReducer = (state = intialState , action) => {
    switch(action.type){
        case 'changeLanguage':
            return{
                language:action.payload
            }
        default:
            return state;
    }
}