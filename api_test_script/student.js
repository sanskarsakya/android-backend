/**
 * POST METHOD
 */
fetch('http://localhost:3000/api/v1/students', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'first_name' : 'samin',
        'last_name'  : 'adhikari',
        'dob'        : '2020-10-29',
        'parent_id'  : 1,
        'gender'     : 1,
        'address'    : 'maitidevi, kathmandu',
        'contact_no' : '9849799166',
        'email'      : 'samin@gmail.com',
        'password'   : 'asdf',
        'avatar'     : 'test avatar',
        'class_id'  : 1,
        'section_id'  : 1,
        'service_ids': [1],
        'year'       : 2020,
        'school_id'  : 1,
    })
})
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => {
        console.error('Request failed', err)
    })


/**
 * PUT METHOD
 */  
fetch('http://localhost:3000/api/v1/students/11', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'first_name'   : 'samin updated',
        'last_name'    : 'adhikari',
        'dob'          : '2020-10-29',
        'parent_id'    : 1,
        'gender'       : 1,
        'address'      : 'maitidevi, kathmandu',
        'contact_no'   : '9849799166',
        'email'        : 'samin@gmail.com',
        'password'     : 'asdf',
        'avatar'       : 'test avatar',
        'class_id'     : 2,
        'section_id'   : 1,
        'service_ids'  : [1, 2],
        'year'         : 2020,
        'school_id'    : 1,
        'enrollment_id': 6,
    })
})
    .catch(err => {
        console.error('Request failed', err)
    })

/**
 * GET METHOD
 */
fetch('http://localhost:3000/api/v1/services?school_id=1')
.then(response => response.json())
.then(body => console.log(body))
.catch(err => {
    console.error('Request failed', err)
})
    