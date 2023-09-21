import Reserve from "../models/Reserve";
import User from "../models/User";
import House from "../models/House";

class ReserveController{
    async store(req, res){
        const { user_id } = req.headers;
        const { house_id } = req.params;
        const { date } = req.body;

        const house  = await House.findById(house_id);
        if(!house){
            return res.status(400).json({
                error: "Casa não existente!"
            })
        }

        if(house.status !== true){
            return res.status(400).json({
                error: "Solicitação indisponivel!"
            })
        }

        const user = await User.findById(user_id);
        if(String(user._id) === String(house.user)){
            return res.status(401).json({
                error: "Reserva não permitida"
            });
        }

        const reserve = await Reserve.create({
            user: user_id,
            house: house_id,
            date,

        })

        const populateExec = await Reserve.findOne({ _id: reserve._id})
        .populate('user')
        .populate('house')
        .exec();

        return res.json({
            populateExec,
            message: "Casa alocada com sucesso!"
        })
    }

    async index(req, res){
        const { user_id } = req.headers;

        const reserves = await Reserve.find({ user: user_id }).populate('house');

        if (reserves.length === 0) {
            return res.json({
                message: "Nenhuma reserva encontrada!"
            });

        }else{
            return res.json({
                reserves,
                message: "Reservas listadas!"
            });

        }

    }

    async destroy(req, res){
        const { reserve_id } = req.body;

        await Reserve.findByIdAndDelete({ _id: reserve_id });


        return res.send({
            message: "Reserva cancelada com sucesso!"
        })
    }

}

export default new ReserveController;