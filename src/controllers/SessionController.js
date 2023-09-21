// Metodos dentro de um Controller:
// index, show, update, store, destroy
import User from "../models/User";
import * as Yup from "yup";

class SessionController{
    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
        });

        const { name, email } = req.body;

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: "Falha na validação!"
            });
        }

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