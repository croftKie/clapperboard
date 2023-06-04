import { initialState } from "./initialState";

export function reducer(state = initialState, action){
    switch (action.type) {
        case 'movie_data':
          return {...state, movieData : action.payload }
        case 'push_data':
          const copy = {...state};
          action.payload.forEach(element => {
            copy.movieData.push(element);
          });
          console.log(copy.movieData)
          return {...state, movieData : copy};
          
          case 'mode':
            return {...state, mode : action.payload }
          case 'fetchUrls':
            return {...state, fetchUrls : action.payload }
          case 'selectedMovieId':
            return {...state, selectedMovieId : action.payload};
          case 'selectedMovie':
            return{...state, selectedMovie : action.payload};
          case 'sort_by':
            return{...state, sort_by : action.payload};
          case 'with_genre':
            return{...state, with_genre : action.payload};
          case 'current_url':
            return{...state, current_url : action.payload};
        default:
          return state
    }
}