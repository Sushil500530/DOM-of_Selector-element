
// module-1-2
console.log('hellow from js!')
console.log(document)
// console.log(document.getElementsByTagName('li'))
const liCollection = document.getElementsByTagName('li')
// console.log(liCollection)
for(const li of liCollection){
    console.log(li.innerText)
}
const allHeading = document.getElementsByTagName('h1')
for(const h1 of allHeading){
    console.log(h1.innerText)
}

// module-3
const headingOne = document.getElementById('header')
// console.log(headingOne)

const headingTwo = document.getElementById('places-title')
// console.log(headingTwo)

// particular change korar jonno
const fruitsTitle = document.getElementById('places-title')
fruitsTitle.innerText = "changes name of fruits"
const places = document.getElementsByClassName('important-places')
// console.log(places)
for(const place of places){
    console.log(place.innerText)
}

// module-4
const frui = document.querySelector('.section1 li')
console.log(frui.innerText);
const someLi = document.querySelectorAll('.section1 li')
// console.log(someLi)
for(const li of someLi){
    console.log(li.innerText)
}

// module-5
const bg = document.getElementById('header').style.textAlign = "center"
const bg2 = document.getElementById('header').style.background ="yellow"
const bg3 = document.getElementById('header').style.padding = '15px';
// const title = document.getElementById('places-title')
// console.log(title)
// title.getAttribute('places-title')

