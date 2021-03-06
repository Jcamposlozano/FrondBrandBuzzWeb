import { Router } from 'express';
import {getData,getMarcas,getCountry, getLogErrores} from '../controllers/index.controller'


const router = Router();

/* router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', creatUser);
router.put('/users/:id', updateUSer);
router.delete('/users/:id', deleteUser);
 */

router.get('/grafico/:marca', getData);
router.get('/marcas/:country', getMarcas);
router.get('/country', getCountry);
router.get('/logErrores',getLogErrores);

export default router;


