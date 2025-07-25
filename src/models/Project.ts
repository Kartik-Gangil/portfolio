import mongoose, { model, models } from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    techStack: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    },
    liveLink: {
        type: String,
    },
    
})

const Project = models.Project || model("Project", ProjectSchema);

export default Project;