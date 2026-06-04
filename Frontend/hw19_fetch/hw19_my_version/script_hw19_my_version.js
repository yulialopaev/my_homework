const baseUrl = "https://jsonplaceholder.typicode.com"

let currentUserId = null;

// Create elements
const showButton = document.querySelector('#showButton');
showButton.style.backgroundColor = '#90CAF9'
showButton.style.borderRadius = '4px'
showButton.style.borderColor = '#1565C0'
showButton.style.padding = '5px'
showButton.style.margin = '5px'

const inputSearch = document.createElement('input');
inputSearch.placeholder = 'Enter a post number'
inputSearch.type = 'number'
inputSearch.style.padding = '5px'
document.body.append(inputSearch);

const searchButton = document.createElement('button');
searchButton.textContent = 'Search'
searchButton.style.backgroundColor = '#90CAF9'
searchButton.style.borderRadius = '4px'
searchButton.style.borderColor = '#1565C0'
searchButton.style.padding = '5px'
searchButton.style.margin = '5px'
document.body.append(searchButton)

const getInfoButton = document.createElement('button')
getInfoButton.textContent = 'Get User Info'
getInfoButton.style.display = 'none'
getInfoButton.style.backgroundColor = '#90CAF9'
getInfoButton.style.borderRadius = '4px'
getInfoButton.style.borderColor = '#1565C0'
getInfoButton.style.padding = '5px'
getInfoButton.style.margin = '5px'
document.body.append(getInfoButton)

const postContainer = document.createElement('div')
document.body.append(postContainer)

const userContainer = document.createElement('div')
document.body.append(userContainer);

function renderList(posts) {

    postContainer.textContent = ''
    postContainer.style.color = '';
    postContainer.style.fontWeight = '';

    posts.forEach(post => {
        const idElement = document.createElement('h3')
        idElement.textContent = `User ID: ${post.userId}`

        const numberElement = document.createElement('p')
        numberElement.textContent = `Number of post: ${post.id}`

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
    getInfoButton.style.display = 'inline-block'


    const value = inputSearch.value.trim()
    userContainer.textContent = ''

    if (!value) {
        postContainer.textContent = 'Please enter a post number.'
        postContainer.style.color = 'red';
        postContainer.style.fontWeight = 'bold';
        getInfoButton.style.display = 'none'
        return
    }
    inputSearch.value = ''


    fetch(`${baseUrl}/posts/${value}`)
        .then(res => res.json())
        .then(post => {
            currentUserId = post.userId
            getInfoButton.style.display = 'inline-block';
            renderList([post])
        })
        .catch(err => {console.log(err)});
})

getInfoButton.addEventListener('click', () => {

    fetch(`${baseUrl}/users/${currentUserId}`)
        .then(res => res.json())
        .then(user => {
            userContainer.textContent = ''

            const userId = document.createElement('h4')
            userId.textContent = `User ID = ${user.id}`

            const userName = document.createElement('p')
            userName.textContent = `Name: ${user.username}`

            const userCity = document.createElement('p')
            userCity.textContent = `City: ${user.address.city}`

            userContainer.append(userId, userName, userCity)
        })
        .catch(err => {console.log(err)});
})