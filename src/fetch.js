// import axios from "axios";


// export async function fetchImages() {
//   const BASE_URL = "https://pixabay.com/api/";
//   let currentPage = 1;
//   let perPage = 40;
//   try {
//       const response = await axios.get(`${BASE_URL}?key=29221253-dd17a46566e1be23f7ca8ff9b&image_type=photo&orientation=horizontal&safesearch=true&q=${nameSearch}&page=${currentPage}&per_page=${perPage}`);
//        const arrayImages = await response.data.hits;

//       if(arrayImages.length === 0) {
//           Notiflix.Notify.warning(
//               "Sorry, there are no images matching your search query. Please try again.")
//       }
//       return {arrayImages,
//           totalHits: response.data.totalHits,}       
      
//   } catch(error) {
//       console.log(error)
//   }
// }
