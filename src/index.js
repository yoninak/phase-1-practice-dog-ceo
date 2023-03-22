console.log('%c HI', 'color: firebrick')


fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((response) => response.json())
.then((data) => data.message.forEach((imgUrl)=>{
   let image = document.createElement("img")
   image.src = imgUrl
   let div = document.getElementById("dog-image-container")
   div.append(image)
}))



fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
   var breeds = Object.keys(data.message)
   console.log(typeof breeds)
   breeds.foreach((listItems)=>{
    let breedslist = document.createElement("li")
    breedslist.textContent = listItems
    let div = document.getElementById("dog-breeds")
    div.append(li)
   })

  })
  .catch((error) => {
    console.error("Error:", error);
  });