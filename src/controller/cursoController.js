import CursoCRUD from "../CRUD/cursoCRUD.js";

export default class CursoController {
    static async rotas(app) {
        app.get('/curso', CursoController.listarCurso);
        app.get('/curso/:id', CursoController.listarCursoId);
        app.post('/curso', CursoController.postarCurso);
        app.put('/curso/:id', CursoController.editarCurso);
        app.delete('/curso/:id', CursoController.deletarCurso);
    }
    static async listarCurso(req, res) {
        CursoCRUD.listarCurso(req, res);
    }

    static async listarCursoId(req, res) {
        CursoCRUD.listarCursoId(req, res);
    }

    static async postarCurso(req, res) {
        CursoCRUD.postarCurso(req, res);
    }

    static async editarCurso(req, res) {
        CursoCRUD.editarCurso(req, res);
    }
    
    static async deletarCurso(req, res) {
        CursoCRUD.deletarCurso(req, res);
    }
}