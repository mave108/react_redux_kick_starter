import { TATA_DATA } from '../actions/types';

export default function(state = {}, action){
  switch (action.type) {
    case TATA_DATA:
        return { ...state, row_data: action.payload }

  }
  return state;
}
