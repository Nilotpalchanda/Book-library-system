import { FETCH_POSTS, NEW_POST ,REMOVE_BOOK} from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
        
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
      case REMOVE_BOOK:
        return {
          ...state,
          items: state.items.filter((data, i) => i !== action.id)
        }
    default:
      return state;
  }
}
