fetch('http://localhost:3000/api/v1/services', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'name'     : 'Futsal',
        'year'      : 2020,
        'school_id' : 1,
    })
})
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => {
        console.error('Request failed', err)
    })

    
fetch('http://localhost:3000/api/v1/services/5', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'name'     : 'Gym Update',
        'year'      : 2020,
        'school_id' : 1,
    })
})
    .catch(err => {
        console.error('Request failed', err)
    })
  
    
    
fetch('http://localhost:3000/api/v1/services?school_id=1')
.then(response => response.json())
.then(body => console.log(body))
.catch(err => {
    console.error('Request failed', err)
})
