const secondList = document.getElementById('second-list')

// create element 
const li = document.createElement('li')
li.innerText = 'my dynamic item'
secondList.appendChild(li)
// const secondSection = document.getElementById('second-section')
// secondSection.appendChild(secondList)

// innerHTML diye akti puro section toiri korte pari 
const main = document.getElementById('main-container')
const section = document.createElement('section')
section.innerHTML = `
<h1> My Dynamic Section</h1>
<p>Extra text add inside paragraph!</p>
<ul>
    <li>first item </li>
    <li>second item</li>
    <li>third item</li>
    <li>fourth item</li>
</ul>
`
main.appendChild(section)
