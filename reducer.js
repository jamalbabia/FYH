const initState = {
  houses: [],
  loading: false,
  erreur: "",
  viewed:false,
  viewedHouse:[]
};

export default function reducerhouse(state = initState, action) {
  switch (action.type) {
    case "FETCH_HOUSES_REQUEST":
      return { ...state, loading: true };

    case "FETCH_HOUSES_SUCCESS":
      return { ...state, houses: action.payload, loading: false };

    case "FETCH_HOUSES_FAILURE":
      return { ...state, houses: [], loading: false, erreur: action.payload }; 

    case 'ADD_HOUSE':
      return {
        ...state,
        houses: [...state.houses, action.payload]
      };

    case 'VIDER_HOUSE':
      return {
        ...state,
        houses: []
      };

    case 'DELETE_HOUSE':
      return {
        ...state,
        houses: state.houses.filter((art) => art.id !== action.payload.id)
      };

    case 'INCREMENTER_DAY':
      return {
        ...state,
        houses: state.houses.map((art) =>
          art.id !== parseInt(action.payload.id) ? art : { ...art, quantite: art.quantite + 1 }
        )
      };

    case 'DECREMENTER_DAY':
      return {
        ...state,
        houses: state.houses.map((art) =>
          art.id !== parseInt(action.payload.id) ? art : { ...art, quantite: art.quantite > 0 ? art.quantite - 1 : 0 }
        )
      };
      case 'VIEW_HOUSE':
        return{
          ...state,
          viewed:true,
          viewedHouse:[action.payload]
        };
        case 'HIDE_HOUSE':
          return{
            ...state,
            viewed:false,
            viewedHouse:[]
          }
    
    default:
      return state;
  }
}
