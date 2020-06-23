fetch('http://localhost:3000/api/v1/claszs', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'class'     : 'Twelve',
        'numeric'   : 12,
        'teacher_id': 1,
        'amount'    : 2000,
        'year'      : 2020,
        'school_id' : 1,
    })
})
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => {
        console.error('Request failed', err)
    })

    
fetch('http://localhost:3000/api/v1/claszs/11', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'class'     : 'Thirteen',
        'numeric'   : 12,
        'teacher_id': 1,
    })
})
    .catch(err => {
        console.error('Request failed', err)
    })
    
fetch('http://localhost:3000/api/v1/claszs')
.then(response => response.json())
.then(body => console.log(body))
.catch(err => {
    console.error('Request failed', err)
})
