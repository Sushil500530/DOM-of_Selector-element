// console.log('append js file!')
// 1. where to add 
const placeList = document.getElementById('placesUL')
// console.log(placeList)
// 2.what to be added 
const li = document.createElement('li')
const li2 = document.createElement('li')
li.innerText = 'rangamati'
li2.innerText = 'pahartoli bon'
// add the child
placeList.append(li);
placeList.append(li2);


// 1.where to add 
const mainCon = document.getElementById('main-container');
// console.log(mainCon)
// 2.what to be added 
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = "my food list"
section.appendChild(h1)
// add mainContainer to section 
mainCon.appendChild(section)
const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'biryani'
ul.appendChild(li1);


const li12 = document.createElement('li')
li2.innerText = 'borani'
ul.appendChild(li2);


const li3 = document.createElement('li')
li3.innerText = 'dourani'
ul.appendChild(li3);


const li4 = document.createElement('li')
li4.innerText = 'palani'
ul.appendChild(li4);
//  add section to ul 
section.appendChild(ul)

// set innerHTML directly 
const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1> my fevourite Dress </h1>
<ul>
    <li> shirt </li>
    <li> pant </li>
    <li> panjabi </li>
    <li> solowar-kamij </li>
    <li> meski </li>
</ul>
`
mainCon.appendChild(sectionDress)
