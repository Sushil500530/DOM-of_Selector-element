// console.log('ami peyeci link ta!')
// tagName 
const allLi = document.getElementsByTagName('li')
console.log(allLi)
// className selection
const allClass = document.getElementsByClassName('second-title')
console.log(allClass)

// id Selection 
const allId = document.getElementById('second-section')
console.log(allId)
allId.style.color = 'violet'
allId.style.backgroundColor = 'gray'
allId.style.padding = '15px'
allId.style.borderRadius = '10px'

// document.querySelectorAll - ata node list gulo dibe
// document.querySelector - ata single node ba akti prothom node dibe