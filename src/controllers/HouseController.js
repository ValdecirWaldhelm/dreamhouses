// import { query } from "express";
import House from "../models/House";

class HouseController{

    async index(req, res){
        const { status } = req.query;

        const houses = await House.find({ status });

        if (houses.length === 0) {
            return res.json({
                message: "Nenhuma casa encontrada!"
            });

        }else{
            return res.json({
                houses,
                message: "Casas encontradas"
            });

        }
        
    }

    async store(req, res){
        const { filename } = req.file;
        const {description, price, location, status } = req.body;
        const { user_id } = req.headers;

        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status,
        });

        return res.json({
            house,
            message: "Casa cadastrada com sucesso!"
        });
    }

    async update(req , res){
        const { filename } = req.file;
        const { house_id } = req.params;
        const {description, price, location, status } = req.body;
        const { user_id } = req.headers;

        const house = await House.updateOne({ _id: house_id }, {
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status,
        });

        return res.json({
            house,
            message: "Casa atualizada com sucesso!"
        });
    }


}

export default new HouseController();