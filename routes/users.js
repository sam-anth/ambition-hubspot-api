
import express from 'express';

 const router  = express.Router();
 const PORT = 5000;

 router.get('/', (req,res) => { res.send('TestData')
});

export default router;