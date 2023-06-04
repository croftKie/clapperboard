import axios from "axios"
let AscDescToggle = true;

export const fetchMovieData = async (url)=>{
  console.log(url);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmEyNjQ2NDgzZTY0OGQ5YzVmZDkxNDU1YzQxNjQ2ZSIsInN1YiI6IjY0Nzg3ODViY2Y0YjhiMDBlMmQ0NzBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZCDSPFM_yodRWtdfxjd7nRN3iaxoLu7dVi397aFCukE'
        }
    }
    const {data} = await axios.get(url,options);
    console.log(data);
    return data;
}

export const generateFilterUrl = (baseUrl, genreFilter, sortFilter)=>{
  const expandedUrl = [baseUrl];
  if (genreFilter !== "") {
    expandedUrl.push(`with_genres=${genreFilter}`);
  };
  if (sortFilter) {
    if(AscDescToggle){
      expandedUrl.push(`sort_by=${sortFilter}.asc`);
      AscDescToggle = !AscDescToggle;
    } else {
        expandedUrl.push(`sort_by=${sortFilter}.desc`);
        AscDescToggle = !AscDescToggle;
    };
  };
  return expandedUrl.join("&");
}

export const generateSearchUrl = (search, searchUrlBase)=>{
  const expandedUrl = `${searchUrlBase}&query=${search}`
  return expandedUrl;
}

export const loadNextPage = () =>{

}