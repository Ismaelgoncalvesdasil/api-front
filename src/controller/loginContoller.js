import { login, registe, selectUsers } from "../CRUD/Login.js";


export default class LoginController {
  static async rotas(app) {
      app.get('/login',selectUsers);
      app.post('/login',login);
      app.post('/register',registe);
  }
}