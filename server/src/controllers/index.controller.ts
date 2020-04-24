import {Request, Response, response} from 'express';
import { pool } from '../database';
import { QueryResult, Query } from 'pg';


export const getUsers = async (req: Request, res: Response): Promise<Response> => { 
    try{
        const response: QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}


export const getCountry = async (req: Request, res: Response): Promise<Response> => { 
    try{
        const response: QueryResult = await pool.query('select distinct ' +
        '"Country" ' +
        'from ' +
        '"br_Tramiq".final ');
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}

export const getMarcas = async (req: Request, res: Response): Promise<Response> => { 
    try{
        const country = (req.params.country)
        const response: QueryResult = await pool.query('Select distinct ' +
        '"Brand" ' +
        'from ' +
        '"br_Tramiq".final ' +
        'where "Country" = $1', [country]);
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}

//*****************************************************/


export const getData = async (req: Request, res: Response): Promise<Response> => { 
    try{
        const marca = (req.params.marca).toString();
        const response: QueryResult = await pool.query('SELECT "br_Tramiq".pruabapiloto($1)', [marca]);
        return res.status(200).json(response.rows);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}

//*****************************************************/
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
} 
