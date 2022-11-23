const UserController = require('../controllers/user.controller')

const routes = (app) => {
    //C
    app.post('/api/outfit-builder/user', UserController.create )
    //R
    app.get('/api/outfit-builder/user', UserController.getAll)
    app.get('/api/outfit-builder/user/:id', UserController.getOne)
    //U
    app.put('/api/outfit-builder/user/:id', UserController.update)
    //D
    app.delete('/api/outfit-builder/user/:id', UserController.delete)
}   