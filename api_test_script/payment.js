
fetch('http://localhost:3000/api/v1/payments/2')
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => {
        console.error('Request failed', err)
    })

fetch('http://localhost:3000/api/v1/payments', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'student_id' : 2,
        'invoice_id' : 9,
        'amount'     : 200,
        'school_id'  : 1,
    })
})
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => {
        console.error('Request failed', err)
    })
