const baseUrl = "https://jsonplaceholder.typicode.com"

// Create elements
const showButton = document.querySelector('#showButton');

const inputSearch = document.createElement('input');
inputSearch.id = 'inputSearch';
inputSearch.placeholder = 'Enter a post number'
document.body.append(inputSearch);

const searchButton = document.createElement('button');
searchButton.id = 'searchButton'
searchButton.textContent = 'Search User Info'
document.body.append(searchButton)

const postContainer = document.createElement('div')
document.body.append(postContainer)

function renderList(posts) {

    postContainer.textContent = ''
    postContainer.style.color = '';
    postContainer.style.fontWeight = '';

    posts.forEach(post => {
        const idElement = document.createElement('h3')
        idElement.textContent = `User ID: ${post.userId}`

        const numberElement = document.createElement('p')
        numberElement.textContent = `Number: ${post.id}`

        const titleElement = document.createElement('h4')
        titleElement.textContent = `Title: ${post.title}`

        const bodyElement = document.createElement('p')
        bodyElement.textContent = `Post: ${post.body}`

        postContainer.append(idElement, numberElement, titleElement, bodyElement)
    })
}


showButton.addEventListener('click', () => {
    fetch(`${baseUrl}/posts`)

        .then(res => res.json())
        .then(posts => renderList(posts))
        .catch(err => console.log(err))
})

searchButton.addEventListener('click', () => {

    const value = inputSearch.value.trim();

    if (!value) {
        postContainer.textContent = 'Please enter a post number.'
        postContainer.style.color = 'red';
        postContainer.style.fontWeight = 'bold';
        return
    }

    inputSearch.value = '';

    fetch(`${baseUrl}/posts/${value}`)
        .then(res => res.json())
        .then(post => post.userId)
        .then(userId => fetch(`${baseUrl}/users/${userId}`))
        .then(res => res.json())
        .then(user => {
            postContainer.textContent = ''

            postContainer.style.color = '';
            postContainer.style.fontWeight = '';

            const userId = document.createElement('h4')
            userId.textContent = `User ID = ${user.id}`

            const userName = document.createElement('p')
            userName.textContent = `Name: ${user.username}`

            const userCity = document.createElement('p')
            userCity.textContent = `City: ${user.address.city}`

            postContainer.append(userId, userName, userCity)
        })
        .catch(err => console.log(err))
})





