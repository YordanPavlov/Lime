var request = require('request');

let apiURLBase = "https://jsonmock.hackerrank.com/api/movies/search/?Title="

function extractTitles(data, listTitles) {
  for(let index = 0; index < data.length; ++index) {
    listTitles.push(data[index].Title)
  }
}

function syncHTTPReq(url) {
   return new Promise(function (resolve, reject) {
     request(url, function (error, response, body) {
       if (!error && response.statusCode == 200) {
         resolve(body)
       } else {
         reject(error)
       }
   })
 })
}

async function getMovieTitles(title) {
  let listTitles = []

  let bodyFirstPage = await syncHTTPReq(apiURLBase + title + "&page=1")

  let jsonObjectFirstPage = JSON.parse(bodyFirstPage);
  let numPages = jsonObjectFirstPage.total
  extractTitles(jsonObjectFirstPage.data, listTitles)
  for(let indexPage = 2; indexPage < numPages; ++indexPage) {
      let bodyCurPage = await syncHTTPReq(apiURLBase + title + "&page=" + indexPage)
      let jsonObjectCurPage = JSON.parse(bodyCurPage);
      extractTitles(jsonObjectCurPage.data, listTitles)
  }

  listTitles.sort()
  return listTitles
}

// Test
//let promise = getMovieTitles("spiderman")
//promise.then(res => {
//  console.log(res)
//})
