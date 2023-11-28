const allRectangle = document.querySelectorAll('.rectangle');
allRectangle.forEach((element) => {
    greyRectangle(element)
})
function greyRectangle(rectangle){
    rectangle.addEventListener('click', (event) => {
        allRectangle.forEach((element) => {    
            if (event.target.classList[1] !== element.classList[1]){
                element.classList.add('rectangleGris')
            }
      
            if (event.target.classList[1] === element.classList[1]){
                element.classList.remove('rectangleGris')
            }
    })
    })
}


