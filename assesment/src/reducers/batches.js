import {ADD_BATCH, GET_BATCHES} from '../actions/batches'


export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_BATCHES:
      return payload;
        
      case ADD_BATCH:
      return {
        ...state,
        [payload.id]: payload
      }
   
   
      default:
        return state
    }


    
}