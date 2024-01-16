const initialState = {
  query: '',
  jobs: [],
};

//è una funzione pura che specifica come lo stato cambi in risposta ad un action 
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JOBS': //creatore di azione: restituisce un oggetto azione, imposta i lavori 
      return {
        ...state,
        jobs: action.payload,
      };
    case 'SET_QUERY': //creatore di azione: restituisce un oggetto azione, imposta le query di ricerca
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
