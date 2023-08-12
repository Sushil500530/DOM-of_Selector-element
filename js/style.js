const style = document.querySelectorAll('section')
// console.log(style)
for(const sector of style){
    sector.style.border = '2px solid red';
    sector.style.borderRadius = '15px';
    sector.style.marginBottom = '8px';
    sector.style.padding = '20px';
    sector.style.background = '#cacafa'
}
// const placeContainer = document.getElementById('places-container')
// placeContainer.style.backgroundColor ='yellow';

const ContainterFruit = document.getElementById('places-container')
ContainterFruit.style.backgroundColor = '#589995'
ContainterFruit.classList.add('text-center')
ContainterFruit.classList.remove('large-text')
// const element = document.getElementById('places-container')
// element.childNodes[1]
//element.childNodes[3].childNodes[2]
// element.childNodes[3].childNodes[2].nextsibling
// element.childNodes[3].childNodes[2].previousSibling
// element.firstChild

// create element and push div/ section 
// document.getElementById('placesUL')​
// placesUL
// const li = document.createElement('li')
// li.innerText = 'create element by js'
// li​
// placesUL.Append(li)
// placesUL