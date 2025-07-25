import mongoose, { model, models } from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
});
const Experience = models.Experience || model("Experience", ExperienceSchema);

export default Experience;