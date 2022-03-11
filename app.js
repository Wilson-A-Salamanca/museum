const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=LeonardoDaVinci1'
let results;

fetch(url)
.then(data => data.json())
.then(objects => objects.objectIDs.forEach(element => {
    console.log(element)
}))
.catch(error => console.log(error))
