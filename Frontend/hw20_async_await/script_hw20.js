const baseUrl = "https://jsonplaceholder.typicode.com"

// Create elements
const showButton = document.querySelector('#showButton');

const inputSearch = document.createElement('input');
inputSearch.id = 'inputSearch';
inputSearch.placeholder = 'Enter a post number'
inputSearch.style.display = "none"
document.body.append(inputSearch);

const searchButton = document.createElement('button');
searchButton.id = 'searchButton'
searchButton.textContent = 'Search User Info'
searchButton.style.display = "none"
document.body.append(searchButton)

const userContainer = document.createElement("p")
document.body.append(userContainer)

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


showButton.addEventListener('click', async () => {
    try {
        inputSearch.style.display = "inline-block"
        searchButton.style.display = "inline-block"

        const response = await fetch(`${baseUrl}/posts`)
        if (!response.ok) {
            throw new Error(`Show error: ${response.status}`)
        }
        const data = await response.json()
        renderList(data)
    } catch (err) {
        console.log(err)
    }
})

searchButton.addEventListener('click', async () => {
    try {

        const value = inputSearch.value.trim();

        if (!value) {
            postContainer.textContent = 'Please enter a post number.'
            postContainer.style.color = 'red';
            postContainer.style.fontWeight = 'bold';
            return
        }

        inputSearch.value = '';

        const response = await fetch(`${baseUrl}/posts/${value}`)
        if (!response.ok) {
            throw new Error(`Search Error: ${response.status}`)
        }

        const data = await response.json()
        const authorId = data.userId
        const userData = await fetch(`${baseUrl}/users/${authorId}`)
        const user = await userData.json()

        postContainer.textContent = ""
        postContainer.style.color = '';
        postContainer.style.fontWeight = '';

        const userId = document.createElement('h4')
        userId.textContent = `User ID = ${user.id}`

        const userName = document.createElement('p')
        userName.textContent = `Name: ${user.username}`

        const userCity = document.createElement('p')
        userCity.textContent = `City: ${user.address.city}`

        userContainer.textContent = ''
        userContainer.append(userId, userName, userCity)

        const userPosts = await fetch(`${baseUrl}/posts?userId=${authorId}`)
        const postsData = await userPosts.json()

        renderList(postsData)

    } catch (err) {
        console.log(err)
    }
})
