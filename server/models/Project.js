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
            Project.create({
                name: 'Lift of God',
                navImage: 'img/projects/lift-of-god/nav.png',
                image: 'img/projects/lift-of-god/project-image.png',
                video: '',
                description: {
                    project: 'Lift of God is a two-player game where the two players take on different roles and collaborate in an attempt to beat a complicated maze as quickly as possible. The first role of the game is the runner who, runs through the maze in first person (in virtual reality) while the other role - the god role - sees the maze from above and has the ability to lift the runner to give him/her a better overview of where he/she is and show paths to take to get through the maze.',
                    implementation: 'The game was made in Unity3D and programmed in C# and is coded so that it runs on two clients simultaneously over a network connection. The runner role is immersed in virtual reality through the use of Oculus Rift, while the god role interacts with the game through a Leap Motion controller in order to lift the runner, point, wave, and in other ways communicate with the runner.'
                },
                tags: ['Game Design', '3D Interaction', 'Oculus Rift', 'Leap Motion', 'C#', 'Unity 3D', 'Virtual Reality']
            });
            Project.create({
                name: 'Fez Controller',
                navImage: 'img/projects/fez-controller/nav.png',
                image: '',
                video: 'https://youtu.be/iI_SSWB3YHs',
                description: {
                    project: 'The Fez Controller is a prototype of a game controller made for the indie game Fez. The project involved both physical design and interaction design. By working with a focus group, initial ideas manifested in low-fidelity prototypes highlighted specific elements of controlling the game that could be improved. The project culminated in a final 3D printed fully functional high-fidelity prototype which can be used for playing Fez. The focus of the prototype was to support the visual aesthetics and style of the game through the controller. The design of the controller was centered around a key aspect that makes the game special, namely rotating the 2D game world in 3D space. The design of the controller was also greatly inspired by old nintendo controllers. The controller was found to enhance immersion for the player due to a more direct mapping of the controls and engaging interaction.',
                    implementation: 'The inside of the controller consists of eleven momentary switches placed strategically around the different face of the controller. Most of the switches were placed directly under the button pressing them. The cube in the middle of the controller used to rotate the game world was made by using four momentary switches which were activated by small pins rotating along with the cube. All swiches were connected to an Arduino Pro Mini powered by three 1.2V AAA batteries. This was necessary to do in order to make the controller wireless. The controller controls the game by communicating (via Bluetooth) with a Java receiver program on the computer running the game. The physical 3D printed part of the Fez Controller was modelled in Blender.'
                },
                tags: ['Physical design', 'Interaction Design', '3D Prototyping', '3D Modelling', '3D Printing', 'Maya', 'Arduino', 'Java', 'Prototyping']
            });
            Project.create({
                name: 'Floating Lamp',
                navImage: 'img/projects/floating-lamp/nav.png',
                image: '',
                video: 'https://youtu.be/rlEE1R5TlMU',
                description: {
                    project: 'This project was made during a university course called Shape Changing Interfaces where students had to design shape changing lamps. The Floating Lamp was designed to be a mystical and magical artifact. At first glance it appears as a wooden box, but once movement is detected close to the lamp it divides itself making the top of the lamp float above the base. This \'turns on\' the lamp making it emit light to its immediate surroundings. When no movement is detected the top part part of the lamp lands on the base again.',
                    implementation: 'The Floating Lamp prototype was created using an Arduino board conrolling a wireless transmitter (Xbee), a linear actuator, a PIR sensor, LEDs, and a relatively big electromagnet. The prototype was programmed to react on inputs from the PIR sensor (movement) making the linear actuator extend (when movement is detected) and retract (when no movement is detected). When the linear actuator extends and retracts it moves the electromagnet which forces the top portion of the lamp to float above the base of the lamp.'
                },
                tags: ['Physical Design', 'Prototyping', 'Shape Change', 'Light Design', 'Arduino', 'Actuator', 'Proximity Sensor']
            });
            Project.create({
                name: 'VW Project',
                navImage: 'img/projects/volkswagen-project/nav.png',
                image: 'img/projects/volkswagen-project/project-image.png',
                video: '',
                description: {
                    project: 'The Volkswagen Project was an opportunity to work with a major company and design in-car technology for the car of the future and present concepts and prototypes at the Volkswagen headquarters in Wolfsburg, Germany. The project was part of a university course called \'Innovation Project\' in which groups had to go through a design process and come up with innovative solutions to a specific case over the course of seven weeks.',
                    implementation: 'A prototype was developed and showcased at an event at the Volkswagen headquarters in Wolfsburg, Germany. Due to a non disclosure agreement I cannot further comment on the prototype or how it was developed.'
                },
                tags: ['Volkswagen', 'International', 'Innovation', 'In-car Technology', 'Prototyping', 'UX Design']
            });
            Project.create({
                name: 'P.E.A.K',
                navImage: 'img/projects/peak/nav.png',
                image: 'img/projects/peak/project-image.png',
                video: '',
                description: {
                    project: 'P.E.A.K stands for Performance Evaluation and Analysis for Kitesurfing. Kitesurfing is an extreme sport that places the participants in situations of risk and potential danger, yet it is very hard if not impossible to find objective ratings and reviews of kites used for kitesurfing based on data collected through measurements of actual use. This not only means that the performance and behaviour of individual kite shapes and brands are currently not well known, but potentially puts especially new users at risk. My research partner and I made a power kite testing system that was used to evaluate three of the most salient characteristics of a kite while it is being flown including the real time measures of windspeed and the resulting pulling forces, resistance to bar movement, and the angle of the kite.',
                    implementation: 'The prototype used for testing consists of an Arduino Mega 2560 board, two tensile s-type load cells rated to 100kg of force connected to the arduino board through and amplifier circuit, a combined accelerometer and gyroscope MPU-6050, and an anemometer. One load cell is used for measuring line tension on the front lines which transfer the majority of the power from the kite to the rider and an additional load cell measures the tension applied to the steering lines when pulling the bar, i.e. bar pressure. The combined accelerometer and gyroscope circuit is used for measuring the angle of the kite in relation to the ground and lastly, the anemometer is used for measuring the wind speed at an altitude of 2.5 metres. Real-time measurements were sent to a Java receiver program to be able to output it to .csv files with the purpose of data processing and analysis.'
                },
                tags: ['Kitesurfing', 'Analysis', 'Outdoor', 'Prototyping', 'Resistant Design', 'Arduino', 'Sensor Fusion', 'Accelerometer', 'Gyroscope', 'Strain Gauge', 'Anemometer']
            });
            Project.create({
                name: 'Shift Planner',
                navImage: 'img/projects/online-shift-planner/nav.png',
                image: 'img/projects/online-shift-planner/project-image.png',
                video: '',
                description: {
                    project: 'The basis of this project was to develop an IT solution for a company by using the principles of experimental system development. This project was done in collaboration with a Danish company called Sport Solution, who specialises in membership systems for fitness centres and sports clubs, along with Danish fitness centres Seier Fitness and Fitnessdk. Through a practical approach to experimental system development utilizing elements from contextual design and conceptual design processes along with a future workshop, several brainstorming sessions and several iterations of prototype testing, a rostering system for managing fitness centres was developed.',
                    implementation: 'The final prototype of the development process was an online work schedule and shift planner for employess at fitness centres. The prototype was implemented using backbone.js and parse.com (back-end).'
                },
                tags: ['Seier Fitness', 'Experimental System Design', 'UX Design', 'UI Design', 'Workshops', 'Contextual Inquiry', 'Prototyping', 'HTML', 'CSS', 'Javascript']
            });
            Project.create({
                name: 'Sphere',
                navImage: 'img/projects/sphere/nav.png',
                image: 'img/projects/sphere/project-image.png',
                video: '',
                description: {
                    project: 'Sphere is the name of a proximity based social network application developed for my bachelor\'s project. The goal of the project was to create a platform facilitating student-to-student contact with the purpose of sharing knowledge making it possible for students to utilize their unique skillset and areas of expertise to help others. The focus of the project was on ideation, validation, and testing.',
                    implementation: 'The nature of the bachelor\'s project was mainly conceptual. The prototype was developed as a native iOS application implementing only core features needed to demonstrate the concept.'
                },
                tags: ['Bachelor\'s Project', 'Knowledge Sharing', 'Social Network', 'UX Design', 'Mobile Development', 'UI Design', 'Photoshop', 'Native iOS', 'Xcode', 'Obj-C', 'Parse']
            });
        }
    });
}

exports.createDefaultProjects = createDefaultProjects; // this is just getProjects called createDefaultProjects because it creates projects if none are present..
