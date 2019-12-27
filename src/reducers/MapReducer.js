
const INITIAL_STATE = {
    activeLocation : {
        longitude:31.365040 , 
        latitude:30.056536
   }
};

export default mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Change_Location':
        let activeLocation = {
            longitude:action.payload.longitude , 
            latitude: action.payload.latitude
        }
        return {activeLocation} ;
        
    default:
      return state
  }
};

