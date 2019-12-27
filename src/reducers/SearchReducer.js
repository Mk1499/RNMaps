import {Keyboard} from 'react-native';

const intialState = {
    recommended: [],
      places: [
        {
          id: 1,
          name: "Nasr City",
          latitude: 30.056388,
          longitude: 31.36429
        },
        {
          id: 2,
          name: "Roxy",
          latitude: 30.092794,
          longitude: 31.314846
        },
        {
          id: 3,
          name: "Haram",
          latitude: 30.012568,
          longitude: 31.208041
        }
      ]
    };

 export default searchReducer = (state = intialState ,action ) => {
     switch (action.type){

        case "viewRecommended":
                console.log("TEXT : ", action.payload);
                console.log("Haram".search(action.payload));
                let reg = new RegExp(action.payload, "i");
                let result = state.places.filter(
                  place => action.payload != "" && place.name.match(reg) != null
                );
                // if (result.length>0)
                console.log("Results : ", result);
                return {
                    ...state,
                    recommended:result
                }
        
        case 'emptyRecommended':
            return {
                ...state,
                recommended:[]
            }

        default:
            return state; 
     }
 }