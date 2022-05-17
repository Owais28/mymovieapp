
const { default: axios } = require('axios');
// const fetch = require('node-fetch')



const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts'

exports.handler = async (event, context) => {

  
  const title = event.queryStringParameters.title

  let response;


  try {
    response = await axios.get(`${process.env.REACT_APP_URL}&s=${title}`)
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