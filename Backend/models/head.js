import mongoose from "mongoose";

const headSchema = new mongoose.Schema({
  title: String,   // President / Secretary / Principal
  name: String,
  description: String,
  image: String
});

export default mongoose.model("Head", headSchema);