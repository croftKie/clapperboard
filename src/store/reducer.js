import { initialState } from "./initialState";
import  { types } from "./types"

const { MOVIE_DATA, MODE } = types;

export function reducer(state = initialState, action){
    switch (action.type) {
        case MOVIE_DATA:
          return {...state, movieData : action.payload }
          case MODE:
            return {...state, mode : action.payload }
          case 'filters':
            const key = Object.keys(action.payload)[0];
            const value = Object.values(action.payload)[0];
            state.filters[key] = value;
            return {...state};
          case 'fetchUrls':
            return {...state, fetchUrls : action.payload }
          case 'selectedMovieId':
            return {...state, selectedMovieId : action.payload};
          case 'selectedMovie':
            return{...state, selectedMovie : action.payload};
        default:
          return state
    }
}