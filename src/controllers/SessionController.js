// Metodos dentro de um Controller:
// index, show, update, store, destroy

import User from "../models/User";

class SessionController{
    async store(req, res){
        const { name, email } = req.body;

        let user = await User.findOne({
            email

        });

        if(!user){
            user = await User.create({
                name,
                email
    
            });

        }else{
            return res.json({
                message: 'Usuário já cadastrado!' 
            });

        }

        return res.json({
            user, 
            message: 'Usuário criado com sucesso!' 
        });
    }

}

export default new SessionController();