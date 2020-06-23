
    
fetch('http://localhost:3000/api/v1/marks/1', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'mark_obtained_theory'   : 55,
        'mark_obtained_practical': 19,
    })
})
    .catch(err => {
        console.error('Request failed', err)
    })
    
fetch('http://localhost:3000/api/v1/marks/1/1/1')
.then(response => response.json())
.then(body => console.log(body))
.catch(err => {
    console.error('Request failed', err)
})

   
fetch('http://localhost:3000/api/v1/marks/marksheet/1/1/1')
.then(response => response.json())
.then(body => console.table(body.data))
.catch(err => {
    console.error('Request failed', err)
})
