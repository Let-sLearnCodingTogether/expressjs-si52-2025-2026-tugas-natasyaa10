import express from "express"
import * as bukuController from "../controllers/bukuController.js"
import * as authController from "../controllers/authController.js"
import { protect } from "../middleware/authMiddleware.js"

const api = express.Router()

api.get("/buku", bukuController.listBuku)
api.post("/buku", bukuController.createBuku)
api.put("/buku/:id", bukuController.updateBuku)
api.delete("/buku/:id", bukuController.deleteBuku)

api.post('/register', authController.register);
api.post('/login', authController.login);

api.get('/me',protect , authController.privateProfile);


export default api