import mongoose from "mongoose";

const itemSchema = mongoose.Schema({ name: { type: String, required: true }, quantity: { type: Number, required: true }, price: { type: Number } })

const itemModel = mongoose.model("items", itemSchema)

export default itemModel