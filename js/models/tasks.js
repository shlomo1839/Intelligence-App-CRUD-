import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    agentName: String,
    agentCode: String,
    target: String,
    informtion: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('task', studentSchema);