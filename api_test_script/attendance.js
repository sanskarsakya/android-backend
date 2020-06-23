
/**
 * PUT METHOD
 */
fetch('http://localhost:3000/api/v1/attendances/1', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'is_present': true,
    })
})
    .catch(err => {
        console.error('Request failed', err)
    })


/**
 * GENERATE METHOD
 */
fetch('http://localhost:3000/api/v1/attendances/1/1')
    .then(response => response.json())
    .then(body => console.table(body))
    .catch(err => {
        console.error('Request failed', err)
    })


/**
* MONTHLY METHOD
*/
fetch('http://localhost:3000/api/v1/attendances/monthly/1/1?month=3&year=2020')
    .then(response => response.json())
    .then(body => console.table(body.data))
    .catch(err => {
        console.error('Request failed', err)
    })
