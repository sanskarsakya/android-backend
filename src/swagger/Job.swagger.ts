/**
 * @swagger
 * definitions:
 *   Job:
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 * 
 */

/**
 * @swagger
 * /api/v1/jobs/:
 *   get:
 *     tags:
 *       - Jobs
 *     description: Returns all Jobs
 *     produces:
 *       - application/json
 *     parameters: 
 *       - name: page
 *         description: Job's page no
 *         in: query
 *         required: false
 *         type: number
 *       - name: limit
 *         description: no. of item to display
 *         in: query
 *         required: false
 *         type: number
 *       - name: search
 *         description: Job title
 *         in: query
 *         required: false
 *         type: string
 *       - name: sort
 *         description: Sort column (id)
 *         in: query
 *         required: false
 *         type: string
 *       - name: order
 *         description: Sort type (asc | desc)
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: returns an array of job object
 *         schema:
 *           $ref: '#/definitions/Job'
 *     security:
 *       - apiKey: []
 */

 
/**
 * @swagger
 * /api/v1/jobs/mine:
 *   get:
 *     tags:
 *       - Jobs
 *     description: Returns all Jobs posted by me
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: returns an array of job object
 *         schema:
 *           $ref: '#/definitions/Job'
 *     security:
 *       - apiKey: []
 *       - jwt: []
 */
 
 
/**
 * @swagger
 * /api/v1/jobs/applied/{id}:
 *   get:
 *     tags:
 *       - Jobs
 *     description: Returns all Users who applied for this job
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: job's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: returns an array of User object
 *         schema:
 *           $ref: '#/definitions/User'
 *     security:
 *       - apiKey: []
 *       - jwt: []
 */
 
/**
 * @swagger
 * /api/v1/jobs/apply/{id}:
 *   get:
 *     tags:
 *       - Jobs
 *     description: Apply for this job
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: job's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: return applicant object type
 *     security:
 *       - apiKey: []
 *       - jwt: []
 */

 
 /**
 * @swagger
 * /api/v1/jobs:
 *   post:
 *     tags:
 *       - Jobs
 *     description: Create job object
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: job parameters
 *         description: Job object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Job'
 *     responses:
 *       201:
 *         description: Job Object created
 *       400:
 *         description: Error
 *     security:
 *       - apiKey: []
 *       - jwt: []
 */

 
 /**
 * @swagger
 * /api/v1/jobs/{id}:
 *   get:
 *     tags:
 *       - Jobs
 *     description: get detail for provided id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Job object id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       201:
 *         description: Job Object detail object
 *       400:
 *         description: Error
 *     security:
 *       - apiKey: []
 *       - jwt: []
 */

 
 
 /**
 * @swagger
 * /api/v1/jobs/{id}:
 *   put:
 *     tags:
 *       - Jobs
 *     description: Update job object with provided id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Job object id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: Job parameters
 *         description: Job object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Job'
 *     responses:
 *       201:
 *         description: Job Object created
 *       400:
 *         description: Error
 *     security:
 *       - apiKey: []
 *       - jwt: []
 */

 
 
 /**
 * @swagger
 * /api/v1/jobs/{id}:
 *   delete:
 *     tags:
 *       - Jobs
 *     description: Delete a Job object
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: job's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       204:
 *         description: Successfully deleted
 *       400:
 *         description: Error
 *     security:
 *       - apiKey: []
 *       - jwt: []
 */
