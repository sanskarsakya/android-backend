
/**
 * POST METHOD
 */
fetch('http://localhost:3000/api/v1/routines', {
    method : 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'period_order': 1,
        'class_id'    : 1,
        'section_id'  : 1,
        'subject_id'  : 4,
        'teacher_id'  : 1,
        'school_id'   : 1,
    })
})
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => {
        console.error('Request failed', err)
    });

/**
 * PUT METHOD
 */  
fetch('http://localhost:3000/api/v1/routines/42', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'period_order': 5,
        'class_id'    : 1,
        'section_id'  : 1,
        'subject_id'  : 4,
        'teacher_id'  : 1,
    })
})
    .catch(err => {
        console.error('Request failed', err)
    })

    
/**
 * DELETE METHOD
 */
fetch('http://localhost:3000/api/v1/routines/44',{method: 'DELETE'})
.catch(err => {
    console.error('Request failed', err)
})



/**
 * GET METHOD
 */
fetch('http://localhost:3000/api/v1/routines/class/1/section/1/school/1')
    .then(response => response.json())
    .then(body => console.table(body.data))
    .catch(err => {
        console.error('Request failed', err)
    })

