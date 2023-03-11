import express from 'express';
import cors from 'cors';
import { openDb } from './conexao/configDB.js';
 
//Classes Create Table

import CreateTableAluno from './models/aluno.js';
import CreateTableCurso from './models/curso.js'
import createTableUsers from './models/login.js';

//Classes Rotes

import AlunoController from './controller/alunoController.js';
import CursoController from './controller/cursoController.js';
import LoginController from './controller/loginContoller.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

//Função DataBase Init
openDb();
CreateTableAluno.aluno();
CreateTableCurso.curso();
createTableUsers.login();

AlunoController.rotas(app);
CursoController.rotas(app);
LoginController.rotas(app)


app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Servidor conectado na porta ${port}`);
})