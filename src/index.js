function fetchDogs() {
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(data => data.forEach(getDogs))
}

function getDogs(dogs) {
    // console.log(dogs)

    let eachDog = document.createElement('span')

    eachDog.textContent = dogs.name
    document.querySelector('#dog-bar').append(eachDog)
    let dogButton = document.createElement('button')

    eachDog.addEventListener("click", (e) => {
        let dogContainer = document.querySelector('#dog-info')
        let dogImg = document.createElement('img')
        let dogName = document.createElement('h2')
        

        dogImg.src = dogs.image
        dogName.textContent = dogs.name
        if (dogs.isGoodDog) {
            dogButton.textContent = "Good Dog!"
        } else {
            dogButton.textContent = "Bad Dog!"
        }
         dogContainer.textContent = ""
        dogContainer.append(dogImg, dogName, dogButton)
       


    })
    dogButton.addEventListener('click', () => {
        if (dogButton.textContent === "Good Dog!") {
            dogButton.textContent = "Bad Dog!"
        } else{
            dogButton.textContent = "Good Dog!"
        }
    })

}


fetchDogs()