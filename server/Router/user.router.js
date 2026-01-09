import express from 'express';
import {userLogin,userPost} from '../Controller/cont.js'
const router = express.Router()
router.get('/login',userLogin)
router.post('/loginPost',userPost)
export default router;