import express from 'express';
import { createComplaint, getAllComplaint } from '../db/connect.js';

const router = express.Router()

router.post('/admin',async (req, res) =>{
    await getAllComplaint()
})

router.post('/complaint',async (req,res) =>{
    await createComplaint(req.body)
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