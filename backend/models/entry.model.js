import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
//   entryId: {
//     type: String,
//     required: true,
//   },
  text: {
    type: String,
    required: true,
  },
  sentiment: {
    type: String,
    
  },
  score: {
    type: Number,
  },
  airesponse:{
    type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Entry = mongoose.model("Entry", EntrySchema);
export default Entry;
