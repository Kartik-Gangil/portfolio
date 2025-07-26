
import mongoose, { model, models } from "mongoose";

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

const Skill = models.Project || model("Skill", SkillSchema);

export default Skill;