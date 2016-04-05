var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required',
        unique: true
    },
    navImage: {
        type: String,
        required: '{PATH} is required'
    },
    image: {
        type: String
    },
    video: {
        type: String
    },
    description: {
        type: {
            project: {
                type: String,
                required: '{PATH} is required'
            },
            implementation: {
                type: String,
                required: '{PATH} is required'
            }
        }
    },
    tags: {
        type: [String]
    },
});

var Project = mongoose.model('Project', projectSchema);

function createDefaultProjects() {
    Project.find({}).exec(function(error, collection) {
        if(collection.length === 0) {
            Project.create({
                name: 'News Butler',
                navImage: 'img/projects/news-butler/nav.png',
                image: '',
                video: 'https://youtu.be/Muru3uAzyr8',
                description: {
                    project: 'News Butler is the name of the Amazon Echo application prototype that my research partner and I developed for our master\'s thesis project at Aarhus University. I wrote my thesis at Stibo Accelerator, a subsidiary company to Stibo A/S. The goal of the project was to explore the potentials and limitations of using voice control for audible news consumption in the home. This was accomplished through a research through design approach, developing and testing the News Butler application through an iterative design process in collaboration with Archant Media Group, a major media group in the United Kingdom and Cxense, a Norwegian company specialising in Data management and personalization.',
                    implementation: 'The functionality of News Butler was implemented as a lambda function through Amazon Web Services (AWS), utilizing the Alexa Skills Kit provided by Amazon. The lambda function is a node.js module executed as an Alexa Skill. The Alexa Skill (News Butler) communicates with a backend API implemented through Parse (parse.com) which features a storage module. The source of news feeds were stored within the News Butler application. As users made requests for news these were downloaded directly from the source(s), sorted in relation to category and based on the specific user\'s user model, and lastly parsed to be fit for audible news consumption and delivered back to the user in a format fitting the request of the user.'
                },
                tags: ['Master\'s Thesis', 'Stibo Accelerator', 'International', 'Workshops', 'Amazon Echo', 'Amazon Web Services', 'UX Design', 'Interaction Design', 'Javascript', 'Node.js', 'Parse', 'Voice Control']
            });
            Project.create({
                name: 'Splitsy',
                navImage: 'img/projects/splitsy/nav.png',
                image: 'img/projects/splitsy/project-image.png',
                video: '',
                description: {
                    project: 'Splitsy is an iPhone application used for managing common expenses. It is a personal project of mine, that I made because my roommates at the time and I were frustrated with having to save receipts and write expenses into spreadsheets to keep track of common expenses associated with living together. Splitsy has never been publically released, but continues to be used on a daily basis by friends who I have invited and has been in use since February, 2014.',
                    implementation: 'The front-end part of Splitsy consists of the application itself and was developed in Xcode in the Objective-C programming language. For the sake of simplicity, the back-end was implemented as a relational database using the cloud-storage framework Parse (parse.com) and for the sake of application speed and the best possible user experience all of the data modelling and heavier database queries and were implemented through Parse\'s Cloud Code.'
                },
                tags: ['Mobile Development', 'Personal Finance', 'Native iOS', 'UI Design', 'Photoshop', 'Illustrator', 'Xcode', 'Obj-C', 'Javascript', 'Node.js', 'Relational database', 'Parse', 'TestFlight', 'iTunes Connect']
            });
        }
    });
}

exports.createDefaultProjects = createDefaultProjects; // this is just getProjects called createDefaultProjects because it creates projects if none are present..
