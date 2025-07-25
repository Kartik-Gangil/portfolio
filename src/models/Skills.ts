
import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    icon: {
       type: String,
       required: true
    },
    domain: {
         type: String,
         required: true
    },
    skills: {
        type: [String],
        required: true
    }
});

export default mongoose.model("Skill", SkillSchema);