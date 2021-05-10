export const machineLearning = {
  difficulty: "Intermediate",
  duration: "40 Live Lectures",
  level: "Level 2",
  link: "/machine-learning-using-python",
  domain: "Artificial Intelligence",
  title: "Master Machine Learning using Python",
  started: "April 15th",
  upcoming: "27th June",
  language: "English",
  mentors: ["anuj"],
  default: 1,
  schedule: [
    {
      courseId: "mlpy0121",
      dates: "15th Apr - 15th July",
      days: "Sat, Sun, Tue, Thu",
      timing: "08:00 PM - 10:00 PM (IST)",
      link: "",
      priceCut: "",
      price: "₹ 99",
      duration: "40 Live Lectures",
      active: false,
    },
    {
      courseId: "mlpy0122",
      dates: "27th June - 04th Sep",
      days: "Tue, Thurs, Sat, Mon",
      timing: "06:00 PM - 08:00 PM (IST)",
      link: "",
      priceCut: "",
      price: "₹ 99",
      duration: "40 Live Lectures (2 hrs)",
      mentor: "Anuj Garg",
      language: "English",
      active: true,
    },
  ],
  projects: [
    {
      title: "Movie Recommendation System",
      img: "/static/images/courses/projects/ml/movie.jpg",
    },
    {
      title: "Face Detection and Recognition",
      img: "/static/images/courses/projects/ml/face.jpg",
    },
    {
      title: "Image Classsification with Neural Network",
      img: "/static/images/courses/projects/ml/classification.jpg",
    },
    {
      title: "Text Based Sentiment Analysis",
      img: "/static/images/courses/projects/ml/sentiment.png",
    },
    {
      title: "Generate new faces with GAN",
      img: "/static/images/courses/projects/ml/gan.jpg",
    },
    {
      title: "Simmulator Learning with OpenAI Gym",
      img: "/static/images/courses/projects/ml/gym.jpg",
    },
  ],

  sections: [
    {
      title: "Classical ML Algos and NLP",
      classes: "Classes 01-20",
      topics: [
        {
          title: "Revising Python Fundamentals",
          classes: "Classes 1-4",
          subtopics: [
            "In-built Data Structures",
            "Control Flow Statements ",
            "Underatanding OOPS and Modules",
            "Various File operations",
          ],
        },
        {
          title: "Data Discovery and Visualiation",
          classes: "Classes 5-8",
          subtopics: [
            "Numpy and array computation",
            "Processing Images with Numpy",
            "Data Acquisition - Web Scrapping, Web APIs",
            "Data Analysis using Pandas",
            "Importing and Exporting Data ",
          ],
        },
        {
          title: "Classical Machine Learning Algorithms",
          classes: "Classes 9-13",
          subtopics: [
            "K-Nearest Neighbour search",
            "K-means clustering",
            "Linear Regression",
            "Logistic Regression",
            "Decision trees and Ensembling Learning",
            "Random Forest Classifiers",
            "Support Vector Machines",
          ],
        },
        {
          title: "Natural Language Processing",
          classes: "Classes 14-18",
          subtopics: [
            "Text generation using Markov Chain",
            "Text classification using Naive Bayes",
            "Deploy ML model with flask on heroku",
            "Create a facebook chatbot with flask",
          ],
        },
      ],
    },
    {
      title: "Deep Learning with Linear, Image and Signal Processing",
      classes: "Classes 20-40",
      topics: [
        {
          title: "Deep Neural Networks",
          classes: "Classes 19-22",
          subtopics: [
            "Neural Architectures and Training",
            "Deep Learning with Keras",
            "Convolutions and the GoogLeNet",
            "Transfer Learning with ResNet and AlexNet",
            "Dimensionality Reduction using Auto-encoders",
          ],
        },
        {
          title: "Advanced Deep Learning",
          classes: "Classes 23-27",
          subtopics: [
            "Recurrent Neural Network",
            "Long Short Term Memory",
            "Music Generation using LSTM",
            "Predict Gender from name with LSTM",
            "Generative Adversarial Nets",
          ],
        },
        {
          title: "Reinforcemnt Learning",
          classes: "Classes 27-30",
          subtopics: [
            "Foundational Reinforcemnt Learning",
            "Evolutionary Algorithms and Genetic Algorithms",
            "Deep Q-learning and training",
            "Training on OpenAI Gym Simulators",
          ],
        },
      ],
    },
  ],
  slides: [
    {
      heading: "",
      subheading: "",
      image: "/static/swipes/ml.png",
    },
  ],
  tags: [
    "Deep Learning",
    "NLP",
    "Convolution",
    "Image Processing",
    "Deployment",
    "Data Aqisition",
    "Data Processing",
    "Git",
    "Ensemble Learning",
    "Recommendations",
    "Traffic Assesment",
    "Cyber fraud Overvation",
    "Neural Network",
    "NLP",
    "GAN",
    "Simmulators",
    "Reinforcement Learning",
    "Genetic Algorithm",
  ],
  overview: [
    "Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome.",
    "We follow the onion peeling approach to create a level order approach towards such great technologies. You do not have to mug up a lot of formulas and maths to become great at machine learning. Understanding what can be done and how to proceed with understanding what is important and start exploring it the right way. We will guide you to build your career in machine learning.",
  ],
  faqs: [
    {
      title: "Will this help me with my career path?",
      answer:
        "Yes. If you learn well, all that the course intends to teach, you’ll be able to impress quite a few interviewers across quite a few fine companies.",
    },
    {
      title: "How your doubts will get resolved?",
      answer:
        "We have an army of TA’s who are available in different time slots to resolve all your doubts. You can also interact with faculty through Slack.",
    },
    {
      title: "Is this course suitable for me?",
      answer:
        "Definitely! If you want to shift to software developer career path, then this course is perfect for you!",
    },
  ],
};
