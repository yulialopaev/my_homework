const baseUrl = "https://jsonplaceholder.typicode.com"

// Create elements
const showButton = document.querySelector('#showButton');

const inputSearch = document.createElement('input');
inputSearch.type = "number"
inputSearch.min = "1"
inputSearch.id = "inputSearch"
inputSearch.placeholder = 'Enter a post number'
inputSearch.style.display = "none"
document.body.append(inputSearch);

const searchButton = document.createElement('button');
searchButton.textContent = 'Search User Info'
searchButton.style.display = "none"
document.body.append(searchButton)

const userContainer = document.createElement("p")
document.body.append(userContainer)

const postContainer = document.createElement('div')
document.body.append(postContainer)

let allPosts = [];

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
        showButton.disabled = true

        inputSearch.style.display = "inline-block"
        searchButton.style.display = "inline-block"

        const response = await fetch(`${baseUrl}/posts`)
        if (!response.ok) {
            throw new Error(`Show error: ${response.status}`)
        }
        const data = await response.json()
        allPosts = data

        renderList(allPosts)
    } catch (err) {
        console.log(err)
    }
})

searchButton.addEventListener('click', async () => {
    userContainer.style = ""
    userContainer.textContent = ""
    // postContainer.textContent = ""

    try {
        const value = Number(inputSearch.value.trim());

        if (!value) {
            userContainer.textContent = 'Please enter a post number.'
            userContainer.style.color = 'red';
            userContainer.style.fontWeight = 'bold';
            return
        }

        if (value < 1 || (value % 1 !== 0)) {
            userContainer.textContent = 'The number must be a positive integer.'
            userContainer.style.color = 'red';
            userContainer.style.fontWeight = 'bold';
            return
        }

        inputSearch.value = '';

        // const response = await fetch(`${baseUrl}/posts/${value}`)
        // if (!response.ok) {
        //     throw new Error(`Search Error: ${response.status}`)
        // }

        const post = allPosts.find(p => p.id === value)

        // const data = await response.json()
        const authorId = post.userId
        const userData = await fetch(`${baseUrl}/users/${authorId}`)
        const user = await userData.json()

        // userContainer.textContent = ""
        userContainer.style = ""
        postContainer.textContent = ""

        const userId = document.createElement('h4')
        userId.textContent = `User ID = ${user.id}`

        const userName = document.createElement('p')
        userName.textContent = `Name: ${user.username}`

        const userCity = document.createElement('p')
        userCity.textContent = `City: ${user.address.city}`

        userContainer.style.border = "2px solid darkRed"
        userContainer.style.borderRadius = "8px"
        userContainer.style.padding = "1rem"
        userContainer.append(userId, userName, userCity)

        const userPosts = allPosts.filter(p => p.userId === authorId)
        renderList(userPosts)
        // const userPosts = await fetch(`${baseUrl}/posts?userId=${authorId}`)
        // const postsData = await userPosts.json()
        //
        // renderList(postsData)
        inputSearch.style.display = "none"
        searchButton.style.display = "none"
        showButton.disabled = false

    } catch (err) {
        console.log(err)
    }
})
