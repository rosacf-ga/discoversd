import tokenService from './tokenService';

const BASE_URL = '/api/attractions/';

export function create(attraction) {
  return fetch(BASE_URL, {
    method: 'POST',
    body: attraction,
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  
  }).then(res => {
    if(res.ok) return res.json();
    throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
  })
}

export function getAll() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => {
    if(res.ok) return res.json();
    throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
  })
}

export function getAttraction(attractionName){
  // console.log(attractionName)
  return fetch(BASE_URL + attractionName, {
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    }
  }).then(res => {
    if(res.ok) return res.json();
    throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
  })
}

export function deleteAttraction(id){
  return fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: {
          'Authorization': 'Bearer ' + tokenService.getToken()
      }
  })
  .then(res => res.json());
}