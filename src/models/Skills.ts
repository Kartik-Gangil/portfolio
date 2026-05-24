
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
    },
    // Optional size used by UI layout: 'small' | 'medium' | 'large'
    size: {
        type: String,
        enum: ['small', 'medium', 'large'],
        default: 'small'
    }
});

const Skill = models.Skill || model("Skill", SkillSchema);

export default Skill;