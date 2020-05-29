"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
exports.getCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('select distinct ' +
            '"Country" ' +
            'from ' +
            'catalogos.brand_category ');
        return res.status(200).json(response.rows);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getMarcas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const country = (req.params.country);
        const response = yield database_1.pool.query('Select distinct ' +
            '"Brand" ' +
            'from ' +
            'catalogos.brand_category ' +
            'where "Country" = $1', [country]);
        return res.status(200).json(response.rows);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
//*****************************************************/
exports.getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const marca = (req.params.marca).toString();
        const response = yield database_1.pool.query('SELECT "br_Tramiq".pruabapiloto($1)', [marca]);
        return res.status(200).json(response.rows);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getLogErrores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('Select * ' +
            'from "br_Tramiq".logerrores ' +
            'where fecha = NOW()::date');
        return res.status(200).json(response.rows);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
//*****************************************************/
/*
export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}


export const getUserbyId = async (req: Request, res: Response): Promise<Response> => {
    try{
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM users where id = $1', [id]);
    return res.json(response.rows);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}


export const creatUser = async (req: Request, res: Response): Promise<Response> => {
    const { name , email } = req.body;
    const response : QueryResult = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(name , email)
    return res.json({
        message: 'User created Successfully',
        body: {
            user: {
                name,
                email
            }
        }
    })
}


export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        await pool.query('DELETE FROM users where id = $1', [id]);
        return res.json(`User ${id} deleted Successfully`);
        }catch(err){
            console.log(err)
            return res.status(500).json('Internal server error');
        }
}

export const updateUSer = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const { name , email } = req.body;
        await pool.query('UPDATE users SET name = $1, email = $2 where id = $3', [name,email,id]);
        return res.json(`User ${name} Ipdated Successful`);

    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}  */
