import AlunoCRUD from "../CRUD/alunoCRUD.js";

export default class AlunoController {
    static async rotas(app) {
        app.get('/aluno', AlunoController.listarAluno);
        app.get('/aluno/:id', AlunoController.listarAlunoId);
        app.post('/aluno', AlunoController.postarAluno);
        app.put('/aluno/:id', AlunoController.editarAluno);
        app.delete('/aluno/:id', AlunoController.deletarAluno);
    }
    static async listarAluno(req, res) {
        AlunoCRUD.listarAluno(req, res);
    }

    static async listarAlunoId(req, res) {
        AlunoCRUD.listarAlunoId(req, res);
    }

    static async postarAluno(req, res) {
        AlunoCRUD.postarAluno(req, res);
    }

    static async editarAluno(req, res) {
        AlunoCRUD.editarAluno(req, res);
    }
    
    static async deletarAluno(req, res) {
        AlunoCRUD.deletarAluno(req, res);
    }
}