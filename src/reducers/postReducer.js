import { FETCH_POSTS, NEW_POST ,REMOVE_BOOK,FETCH_PRODUCT_FILTER,SELECT_FILTER} from '../actions/types';

const initialState = {
  items: [],
  item: {},
  searchArray:[],
  filterArray:[],
  searchValue: '',
  selectedValue:''
};

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
        searchArray:action.payload,
        filterArray:action.payload
        
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
     case FETCH_PRODUCT_FILTER:

          const { searchValue } = action;
          var updatedList = state.items;
          updatedList = updatedList.filter(function(item){
            return item.bookname.toLowerCase().search(searchValue.toLowerCase()) !== -1
          });
          return { 
            ...state, 
            searchValue,
            searchArray:updatedList 
          };
      case SELECT_FILTER:
        debugger;
          const { selectedValue } = action;
          var updatedList = state.items;
          updatedList = updatedList.filter(function(item){
            return item.bookcategory.toLowerCase().search(selectedValue.toLowerCase()) !== -1
          });
          return { 
            ...state, 
            selectedValue,
            searchArray:updatedList 
          };
    default:
      return state;
  }
}
