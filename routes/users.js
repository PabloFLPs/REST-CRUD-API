import express from "express"
import { getUsers, createUser, getUserByID, deleteUser, updateUser } from "../controllers/users";

//initializing our router
const router = express.Router()

/**
 * all routes in here was starting with /users...
 * but /users is the route in index.js, so we set
 * "/" to our routes, because this will result in
 * "/users/".
 */
router.get("/", getUsers)
router.post("/", createUser)
/**
 * the /:id means that we expect anything as param
 * after the "/".
 * 
 * Example:
 * /users/2 -> req.params {id:2}
 */
router.get("/:id", getUserByID)
router.delete("/:id", deleteUser)
router.patch("/:id", updateUser)

export default router