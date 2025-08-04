import express from "express"
import {addNewItem, listAllItem} from "../controllers/itemController.js"

const itemRouter = express.Router()

itemRouter.post('/',addNewItem)
itemRouter.get("/",listAllItem)

export default itemRouter