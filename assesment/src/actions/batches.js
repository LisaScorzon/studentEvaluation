import * as request from 'superagent'
import {logout} from './users'
import {isExpired} from '../jwt'


const baseUrl = 'http://localhost:4000'


export const ADD_BATCH = 'ADD_BATCH'
export const GET_BATCHES = 'GET_BATCHES'
export const FETCHED_DETAILED_BATCH = 'FETCHED_DETAILED_BATCH'



export const addBatch = batch => ({
    type: ADD_BATCH,
    payload: batch
  })


  export const createBatch = (batch) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt

      if (isExpired(jwt)) return dispatch(logout())
   console.log(batch)
    request
      .post(`${baseUrl}/batches`)
      .send(batch)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(addBatch(batch)))
      .catch(err => console.error(err))
  }

  
  export const getBatches = () => (dispatch) => {

    request
      .get(`${baseUrl}/batches`)
      .then(result => {
        dispatch({
          type: GET_BATCHES,
          payload: result.body
        })
      })
      .catch(err => console.error(err))
  }