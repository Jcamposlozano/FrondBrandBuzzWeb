"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = express_1.Router();
/* router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', creatUser);
router.put('/users/:id', updateUSer);
router.delete('/users/:id', deleteUser);
 */
router.get('/grafico/:marca', index_controller_1.getData);
router.get('/marcas/:country', index_controller_1.getMarcas);
router.get('/country', index_controller_1.getCountry);
router.get('/logErrores', index_controller_1.getLogErrores);
exports.default = router;
