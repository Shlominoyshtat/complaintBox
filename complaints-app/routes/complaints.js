import express from 'express';

const router = express.Router()

router.post('/admin',(req, res) =>{
    console.log('hi admin')
    res.send('hi from admin')
})

router.post('/complaint',(req,res) =>{
    console.log('hi complaint')
    res.send('hi from complaint')
})

export function checkPassword(req,res,next){
    if(req.body.password !== process.env.PASSWORD){
        return res.status(400).json({'error':'password is wrong'});
    }
    console.log('log')
    next();
}

export default router;