import House from "../models/House";

class DashboardController{
    async show(req, res){
        const { user_id } = req.headers;

        const houses = await House.find({ user: user_id });

        if (houses.length === 0) {
            return res.json({
                message: "Nenhuma casa foi encontrada!"
            });

        }else{
            return res.json({
                houses,
                message: "Casas encontradas"
            });

        }

    }

}

export default new DashboardController();