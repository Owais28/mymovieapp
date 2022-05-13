// const fetch = require('node-fetch')

// exports.handler = async function(event,context){
//     const API_URL = 'http://www.omdbapi.com/?apikey'
//     const API_KEY = 'd500b261' ;
//     const title = event.queryStringParameters.title
//     let response;
//     try {
//         // response = await fetch(`${API_URL}=${API_KEY}&s=${title}`);
//         // response = "Hello"
//         response = await fetch('https://randomuser.me/api/');
    
//     } catch (error) {
//         return {
//             statusCode: err.statusCode || 500,
//             body: JSON.stringify({
//               error: err.message
//             })
//           }   
//     }

//     // const response = `Hello ${title}` 
//     // const data = await response.json()
//     // const movies = data.Search
//     // setMovies(movies)
//     // console.log(movies)

//     return {
//         statusCode:200,
//         body : JSON.stringify(
//             {
//                 data : response
//             }
//         )    
//     }
    
// }

const { default: axios } = require('axios');
// const fetch = require('node-fetch')



const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts'

exports.handler = async (event, context) => {

  const API_URL = 'http://www.omdbapi.com/?apikey'
  
  const title = event.queryStringParameters.title

  let response;


  try {
    response = await axios.get(`${API_URL}=${process.env.REACT_APP_API_KEY}&s=${title}`)
    // console.log(process.env.REACT_APP_API_KEY)
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response.data
    })
  }
}