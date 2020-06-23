fetch('http://localhost:3000/api/v1/parents', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'first_name': 'puzan',
        'last_name': 'sakya',
        'email': 'puzansakya@gmail.com',
        'password': 'password123',
        'contact_no': '984979966',
        'address': 'kathmandu',
        'profession': 'software engineer',
    })
})
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => {
        console.error('Request failed', err)
    })

    
fetch('http://localhost:3000/api/v1/parents/1', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'first_name': 'puzan update',
        'last_name': 'sakya updates',
        'email': 'puzansakya@gmail.com updates',
        'password': 'password123 updates',
        'contact_no': '984979966 updates',
        'address': 'kathmandu updates',
        'profession': 'software engineer updates',
    })
})
    .catch(err => {
        console.error('Request failed', err)
    })
    
fetch('http://localhost:3000/api/v1/parents')
.then(response => response.json())
.then(body => console.log(body))
.catch(err => {
    console.error('Request failed', err)
})


fetch('http://localhost:3000/api/v1/parents/1')
.then(response => response.json())
.then(body => console.log(body))
.catch(err => {
console.error('Request failed', err)
})



