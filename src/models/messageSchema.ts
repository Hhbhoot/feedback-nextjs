import mongoose ,{ Schema ,Document, mongo }from "mongoose"

export interface Message extends Document {
    message : string;
    createdAt : Date
}

const messageSchema : Schema<Message> = new Schema({
    message : { type : String , required : true },
    createdAt : { type : Date , default : Date.now }
})

const MessageModel = ( mongoose.models.Message as mongoose.Model<Message> || 
    mongoose.model<Message>("Message", messageSchema)  ) ;


export default MessageModel ;