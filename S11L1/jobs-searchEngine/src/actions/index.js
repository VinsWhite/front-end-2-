import { endpointSearch } from "../endpoint/endpoint"
import axios from 'axios'

export const removeFromFavourite = (fav) => {
    return { type: "REMOVE_FROM_FAVOURITE", payload: fav}
}

export const searchJob = (query) => async (dispatch) => {
  try {
    const response = await axios.get(endpointSearch + query + "&limit=20");
    if (response.status === 200) {
      const { data } = response.data;
      console.log("Jobs data:", data); // Aggiungi questo log per debug
      dispatch(setJobs(data));
    } else {
      alert("Error fetching results");
    }
  } catch (error) {
    console.log(error);
  }
}


export const setJobs = (jobs) => ({
    type: 'SET_JOBS',
    payload: jobs,
});