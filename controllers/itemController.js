import mongoose from "mongoose";
import itemModel from "../models/itemModel.js";



export const addNewItem = async (req, res) => {
    try {
        const { name, quantity, price } = req.body
        const newItem = await itemModel.create({ name, quantity, price })
        res.json({ message: "item created succsessfully",newItem })
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
   

}

export const listAllItem = async (req, res) => {
    try{
          const lists = await itemModel.find({})
    res.status(200).json(lists)
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
   
}