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
    ,
    // Numeric position used to persist ordering in the dashboard
    position: {
        type: Number,
        default: 0,
    }
});
const Experience = models.Experience || model("Experience", ExperienceSchema);

export default Experience;