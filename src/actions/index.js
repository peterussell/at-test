import axios from 'axios';

const ROOT_URL = `https://launchlibrary.net/1.2`

export const FETCH_LAUNCHES = 'FETCH_LAUNCHES';
export const FETCH_AGENCIES = 'FETCH_AGENCIES';
export const SET_FILTER = 'SET_FILTER';
export const SELECT_VIEW = 'SELECT_VIEW';

export function fetchLaunches() {
  const url = `${ROOT_URL}/launch`;
  const request = axios.get(url);

  return {
    type: FETCH_LAUNCHES,
    payload: request
  };
}

export function fetchAgencies() {
  const url = `${ROOT_URL}/agency`;
  const request = axios.get(url);

  return {
    type: FETCH_AGENCIES,
    payload: request
  }
}

export function applyFilter(term) {
  return {
    type: SET_FILTER,
    payload: term
  }
}

export function selectView(viewName) {
  return {
    type: SELECT_VIEW,
    payload: viewName
  }
}
