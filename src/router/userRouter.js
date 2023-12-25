const router = require("express").Router()
const userController = require("./../controllers/userController")


router.get("/users", userController.getAllUser)
router.post("/users", userController.postUser)
router.get("/users/:id", userController.getUserById)
router.delete("/users/:id", userController.deleteUser)
router.patch("/users/:id", userController.updateUser)
router.put("/users/:id", userController.updateUserPutMethod)

module.exports = router