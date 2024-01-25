import axios from "axios";

export function addHouse(id,type,title,location,city,nights,price,Img,guests,bedrooms,beds,baths) {
  return { type: "ADD_HOUSE", payload: { id,type,title,location,city,nights,price,Img,guests,bedrooms,beds,baths} };
}
export function deleteHouse(id) {
  return { type: "DELETE_HOUSE", payload: { id } };
}

export function incrementerDay(id) {
  return { type: "INCREMENTER_DAY", payload: { id } };
}
export function viewHouse(id,type,title,location,city,nights,price,Img,guests,bedrooms,beds,baths) {
  return { type: "VIEW_HOUSE", payload: { id,type,title,location,city,nights,price,Img,guests,bedrooms,beds,baths} };
}

export function viderHouse() {
  return { type: "VIDER_HOUSE" };
}

export function decrementerDay(id) {
  return { type: "DECREMENTER_DAY", payload: { id } };
}




export function fetch_house_success(houses) {
  return { type: "FETCH_HOUSES_SUCCESS", payload: houses };
}

export function fetch_house_request() {
  return { type: "FETCH_HOUSES_REQUEST" };
}

export function fetch_house_failure(err) {
  return { type: "FETCH_HOUSES_FAILURE", payload: err };
}

export function fetchHouse() {
  return function (dispatch) {
    dispatch(fetch_house_request());  
    axios.get("http://localhost:3500/houses")
      .then((resp) => dispatch(fetch_house_success(resp.data)))
      .catch((err) => dispatch(fetch_house_failure(err)));
  };
}
