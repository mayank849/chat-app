import mongoose from "mongoose";

const messsageSchema = new mongoose.Schema({
   senderId: {type: mongoose.Schema.Types.ObjectId, red: "User", required: true},
   receiverId: {type: mongoose.Schema.Types.ObjectId, red: "User", required: true},
   text: {type: String,},
   image: {type: String,},
   seen: {type: Boolean, default: false}
}, { timestamps: true});

const Message = mongoose.model("Message", messsageSchema);

export default Message;