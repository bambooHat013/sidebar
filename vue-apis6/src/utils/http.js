import axios from "./request";

export function getNavdata(){
  return axios({
    method: 'get',
    url: 'get_navdata'
  })
}