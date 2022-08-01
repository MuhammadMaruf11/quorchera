
// instructors section image imported
import Andrew from '../../assets/img/instructors/profile-1.png'
import Eddy from '../../assets/img/instructors/profile-2.png'
import Aarti from '../../assets/img/instructors/profile-3.png'
import Geoff from '../../assets/img/instructors/profile-4.png'


// offered section image imported
import deepLearning from '../../assets/img/instructors/Icon-1.png';
import stanFord from '../../assets/img/instructors/Icon-2.png';


// export instructors section
export const Profiles = [
    {
        id: '1',
        to: '/',
        image: Andrew,
        name: 'Andrew Ng',
        addition: 'top instructor',
        post: 'Instructor',
        from: 'Founder, DeepLearning.AI & Co-founder, Coursera',
        learners: ["2,268,456 ", "Learners"],
        courses: ["38 ", "Courses"]
    },
    {
        id: '2',
        to: '/',
        image: Eddy,
        name: 'Eddy Shyu',
        post: 'Curriculum Architect',
        from: 'Product Lead, DeepLearning.AI',
        learners: ["168,456 ", "Learners"],
        courses: ["23 ", "Courses"]
    },
    {
        id: '3',
        to: '/',
        image: Aarti,
        name: 'Aarti Bagul',
        addition: 'top instructor',
        post: 'Curriculum Engineer',
        learners: ["68,456 ", "Learners"],
        courses: ["13 ", "Courses"]
    },
    {
        id: '4',
        to: '/',
        image: Geoff,
        name: 'Geoff Ladwig',
        addition: 'top instructor',
        post: 'Curriculum Engineer',
        from: 'DeepLearning.AI',
        learners: ["68,456 ", "Learners"],
        courses: ["3 ", "Courses"]
    }
]



//export offered section
export const icons = [
    {
        id:"1",
        name:"DeepLearning.AI",
        desc1:"DeepLearning.AI is an education technology company that develops a global community of AI talent.",
        desc2:"DeepLearning.AIs expert-led educational experiences provide AI practitioners and non-technical professionals with the necessary tools to go all the way from foundational basics to advanced application, empowering them to build an AI-powered future.",
        image: deepLearning
    },
    {
        id:"2",
        name:"Stanford University",
        desc1:"The Leland Stanford Junior University, commonly referred to as Stanford University or Stanford, is an American private research university located in Stanford, California on an 8,180-acre (3,310 ha) campus near Palo Alto, California, United States.",
        image: stanFord
    }
]