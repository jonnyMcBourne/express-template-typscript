const { Router } = require('express');
const { getExample } = require('../controllers/example-controller');

const router = Router();
const exampleRoute = router.get('/example', getExample);


export default exampleRoute
