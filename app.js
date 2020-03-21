const body = document.body
fetch('http://localhost:3000/babies')
.then(response => response.json())
.then(babyFunction)

const babyForm = document.querySelector('#baby-form')
function babyFunction(babies){
    babyForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const babyData = new FormData(event.target)
        const aBabysName = babyData.get('name')
        const aBabysAge = babyData.get('age')

        const babyName = document.createElement('h1')
        const babyAge = document.createElement('h2')

        babyName.innerText = aBabysName
        babyAge.innerText = aBabysAge

        const babyHeader = document.createElement('header')
        babyHeader.id = 'baby-header'

        body.appendChild(babyHeader)
        babyHeader.append(babyName, babyAge)

        fetch('http://localhost:3000/babies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'name': aBabysName,
                'age': aBabysAge
            })
        })


    })
}

