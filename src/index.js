console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () => {
  let allBreeds = []
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const dogImgContainer = document.getElementById('dog-image-container')
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const breedUl = document.querySelector('#dog-breeds')
  const breedDropdown = document.querySelector('#breed-dropdown')

  breedUl.addEventListener('click', (event) => {
    event.target.style.color = "pink"
  })

  breedDropdown.addEventListener('change', (event) => {
    const selectedLetter = event.target.value
    const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter))
    breedUl.innerHTML = filteredBreeds.map((breed) => `<li> ${breed} </li>`).join('')
  })

    fetch(imgUrl, {method: 'GET'})
    .then((responsePromiseObj) => {
      if(responsePromiseObj.ok) {
        return responsePromiseObj.json()
      } else {
        throw responsePromiseObj
      }
    })
    .then((parsedImg) => {
        parsedImg.message.forEach(function(imgUrl) {
          dogImgContainer.innerHTML += `<img src="${imgUrl}">`
        })
      })
    fetch(breedUrl, {method: 'GET'})
    .then((responsePromiseObj) => {
      if (responsePromiseObj.ok) {
        return responsePromiseObj.json()
      } else {
        throw responsePromiseObj
      }
    })
    .then((dogBreedList) => {
      allBreeds = Object.keys(dogBreedList.message)
      // console.log(dogBreedName)
      console.log(allBreeds)
        breedUl.innerHTML = allBreeds.map((breed) => `<li> ${breed} </li>`).join('')
    })
  });
