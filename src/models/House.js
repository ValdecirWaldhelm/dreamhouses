import { Schema, model } from "mongoose";

const HouseSchema = new Schema({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, { // nesta requisição inclua a variavel no json virtual
    toJSON: {
        virtuals: true,
    }
});

// ou seja é criado um campo virtual, e não vai estar registrado na tabela banco de dados, somente pode ser criado com function o complemento de get;
HouseSchema.virtual('thumbnail_url').get(function(){
 return `http://localhost:3333/files/${this.thumbnail}`;
})

export default model('House', HouseSchema);