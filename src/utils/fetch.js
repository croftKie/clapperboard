import axios from "axios"
export const fetchMovieData = async (url, mode)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmEyNjQ2NDgzZTY0OGQ5YzVmZDkxNDU1YzQxNjQ2ZSIsInN1YiI6IjY0Nzg3ODViY2Y0YjhiMDBlMmQ0NzBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZCDSPFM_yodRWtdfxjd7nRN3iaxoLu7dVi397aFCukE'
        }
    }

    if (mode = 'trending'){
      const {data} = await axios.get(url,options);
      return data;
    }
    const {data} = await axios.get(url,options);
    return data;
}

export const generateFetchUrl = (filters, baseUrl)=>{
  const expandedUrl = [baseUrl];
  for (const key in filters) {
    expandedUrl.push(`${key}=${filters[key]}`);
  }
  return expandedUrl.join("&");
}

export const generateSearchUrl = (search, searchUrlBase)=>{
  const expandedUrl = `${searchUrlBase}&query=${search}`
  return expandedUrl;
}