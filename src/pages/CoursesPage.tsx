import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Clock, Trophy, CheckCircle2, GraduationCap, Building2, ArrowRight,Lightbulb, Target,CheckCircle ,BookOpen} from 'lucide-react';
import { Context } from '../context/Context';
import py1 from "../assets/profs/madhav.png"
import py2 from "../assets/profs/Sonali thakur.jpg"
import aiml1 from "../assets/profs/Arun Kumar Singh.jpg"
import aiml2 from "../assets/profs/pankaj.jpg"
import web1 from "../assets/profs/Pradeep Rajarathinam.jpg"
import web2 from "../assets/profs/Sobit Prasad.jpg"
import cyb1 from "../assets/profs/Tarun Kotagiri.webp"
import dat1 from "../assets/profs/rajesh.jpg"

import bloc1 from "../assets/profs/Samir Anil Jumade.jpg"
import iot1 from "../assets/profs/Shyam Krishan.jpg"
import iot2 from "../assets/profs/Vishal.jpg"

import a from "../assets/courses/python.webp"
import b from "../assets/courses/java.webp"
import c from "../assets/courses/ai.webp"
import d from "../assets/courses/web.webp"
import e from "../assets/courses/cyber.webp"
import f from "../assets/courses/data.webp"
import g from "../assets/courses/cloud.webp"
import h from "../assets/courses/block.webp"
import i from "../assets/courses/iot.webp"
import { useLocation } from 'react-router-dom';
import Courses from '../components/Courses';
import Courses_copy from '../components/Courses_copy';
import FAQ from '../components/FAQ';



const tracks = [
  {
    name: 'Foundation',
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    description: 'Perfect for beginners starting their tech journey',
    duration: '1-2 months',
    price: 'Rs. 4999/-',
    features: [
      'Covers core concepts from scratch',
    
    ],
  },
  {
    name: 'Proficient',
    icon: <Target className="h-8 w-8 text-purple-500" />,
    description: 'For those with basic knowledge seeking to advance',
    duration: '2 months',
    price: 'Rs. 6999/-',
    features: [
      'Delves deeper into specialized skills',
     
    ],
  },
  {
    name: 'Master',
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    description: 'Advanced learning for experienced professionals',
    duration: '3 months',
    price: 'Rs. 9999/-',
    features: [
      'Focuses on high-level applications and industry trends',
    
    ],
  },
];

export const courses = [
  {
    "id": "data-analytics",
    "title": "Data Analytics",
    "description": {
      "Foundation": "Fresh graduates, career switchers, and professionals from non-technical backgrounds looking to enter data analytics.",
      "Proficient": "Professionals with basic analytics skills looking to advance, including developers and business analysts.",
      "Master": "Experienced professionals aiming to specialize in advanced analytics and data science."
    },
    "image": f,
    "skills": {
      "Foundation": ["Fundamentals of Data Analytics", "Python for Data Analysis", "SQL Basics", "Data Cleaning", "Data Visualization"],
      "Proficient": ["Fundamentals of Data Analytics", "Python for Data Analysis", "SQL Basics", "Data Cleaning", "Data Visualization", "Advanced SQL", "Business Intelligence (Power BI/Tableau)", "Predictive Analytics", "Data Storytelling"],
      "Master": ["Fundamentals of Data Analytics", "Python for Data Analysis", "SQL Basics", "Data Cleaning", "Data Visualization", "Advanced SQL", "Business Intelligence (Power BI/Tableau)", "Predictive Analytics", "Data Storytelling", "Big Data & Cloud Analytics", "Advanced Machine Learning", "Time Series Forecasting", "Data Engineering"]
    },
    "companies": {
      "Foundation": ["TCS", "Infosys", "Wipro", "Deloitte"],
      "Proficient": ["Amazon", "Accenture", "Capgemini", "IBM"],
      "Master": ["Google", "Meta", "Netflix", "Tesla"]
    },
    "avgSalary": {
      "Foundation": "₹4 - ₹6 LPA",
      "Proficient": "₹8 - ₹12 LPA",
      "Master": "₹15 - ₹25 LPA"
    },
    "jobGrowth": {
      "Foundation": "18%",
      "Proficient": "22%",
      "Master": "25%"
    },
    "whyChoose": {
      "Foundation": [
        "Beginner-friendly with hands-on exercises",
        "Strong foundation in data analysis techniques",
        "Prepares for entry-level analyst roles"
      ],
      "Proficient": [
        "Covers real-world data analytics use cases",
        "Hands-on projects with BI dashboards & reports",
        "Prepares for mid-level data analyst roles"
      ],
      "Master": [
        "Covers high-demand enterprise analytics skills",
        "Focuses on scalability, automation, and cloud-based analytics",
        "Prepares for senior analyst & data science roles"
      ]
    },
    "modules": {
      "Foundation": [
        {
          "title": "Introduction to Data Analytics",
          "topics": ["Understanding datasets", "Types of analytics"]
        },
        {
          "title": "Excel & Google Sheets for Analytics",
          "topics": ["Pivot tables", "Charts", "Basic formula-based analysis"]
        },
        {
          "title": "Python for Data Analysis",
          "topics": ["NumPy", "Pandas", "Basic data wrangling"]
        },
        {
          "title": "SQL Basics",
          "topics": ["CRUD operations", "Filtering", "Sorting"]
        },
        {
          "title": "Data Visualization Fundamentals",
          "topics": ["Bar charts", "Line graphs", "Histograms"]
        }
      ],
      "Proficient": [
        {
          "title": "Introduction to Data Analytics",
          "topics": ["Understanding datasets", "Types of analytics"]
        },
        {
          "title": "Excel & Google Sheets for Analytics",
          "topics": ["Pivot tables", "Charts", "Basic formula-based analysis"]
        },
        {
          "title": "Python for Data Analysis",
          "topics": ["NumPy", "Pandas", "Basic data wrangling"]
        },
        {
          "title": "SQL Basics",
          "topics": ["CRUD operations", "Filtering", "Sorting"]
        },
        {
          "title": "Data Visualization Fundamentals",
          "topics": ["Bar charts", "Line graphs", "Histograms"]
        },
        {
          "title": "Advanced SQL & Data Processing",
          "topics": ["Joins", "Subqueries", "Window functions"]
        },
        {
          "title": "Data Cleaning & Feature Engineering",
          "topics": ["Handling missing values", "Outlier detection", "Data transformation"]
        },
        {
          "title": "Power BI & Tableau for BI Reporting",
          "topics": ["Dashboard design", "Data modeling", "DAX functions"]
        },
        {
          "title": "Introduction to Machine Learning",
          "topics": ["Regression", "Classification", "Model evaluation"]
        }
      ],
      "Master": [
        {
          "title": "Introduction to Data Analytics",
          "topics": ["Understanding datasets", "Types of analytics"]
        },
        {
          "title": "Excel & Google Sheets for Analytics",
          "topics": ["Pivot tables", "Charts", "Basic formula-based analysis"]
        },
        {
          "title": "Python for Data Analysis",
          "topics": ["NumPy", "Pandas", "Basic data wrangling"]
        },
        {
          "title": "SQL Basics",
          "topics": ["CRUD operations", "Filtering", "Sorting"]
        },
        {
          "title": "Data Visualization Fundamentals",
          "topics": ["Bar charts", "Line graphs", "Histograms"]
        },
        {
          "title": "Advanced SQL & Data Processing",
          "topics": ["Joins", "Subqueries", "Window functions"]
        },
        {
          "title": "Data Cleaning & Feature Engineering",
          "topics": ["Handling missing values", "Outlier detection", "Data transformation"]
        },
        {
          "title": "Power BI & Tableau for BI Reporting",
          "topics": ["Dashboard design", "Data modeling", "DAX functions"]
        },
        {
          "title": "Introduction to Machine Learning",
          "topics": ["Regression", "Classification", "Model evaluation"]
        },
        {
          "title": "Big Data & Cloud Analytics",
          "topics": ["Apache Spark", "AWS Redshift", "Azure Synapse"]
        },
        {
          "title": "Advanced Machine Learning",
          "topics": ["Neural networks", "NLP", "Reinforcement learning"]
        },
        {
          "title": "Time Series Forecasting & Statistical Modeling",
          "topics": ["ARIMA", "Prophet", "Bayesian methods"]
        },
        {
          "title": "Data Engineering & ETL Pipelines",
          "topics": ["Apache Airflow", "Data Warehousing"]
        },
        {
          "title": "AI-Powered Analytics & Automation",
          "topics": ["Chatbots", "AutoML", "GPT-based analytics"]
        },
    ]
    },
    mentors: {
      "Foundation":[
        {
          name:"Dr. Rajesh Kumar K V",
          desc:"Chief Technological Scientist",
          img:dat1,
          experience: '8+ years',
        expertise: ['System Design', 'Cloud Architecture'],
        },
     
    ],
      "Proficient":[
        {
          name:"Dr. Rajesh Kumar K V",
          desc:"Chief Technological Scientist",
          img:dat1,
          experience: '8+ years',
        expertise: ['System Design', 'Cloud Architecture'],
        },
    ],
      "Master":[
        {
          name:"Dr. Rajesh Kumar K V",
          desc:"Chief Technological Scientist",
          img:dat1,
          experience: '8+ years',
        expertise: ['System Design', 'Cloud Architecture'],
        },
    ]
    },
    
  },
  {
    "id": "ai-machine-learning",
    "title": "AI & Machine Learning",
    "description": {
      "Foundation": "Fresh graduates, students with no prior coding experience, and professionals looking to start a career in AI/ML.",
      "Proficient": "Developers with basic AI/ML knowledge, professionals transitioning into AI roles, and those interested in deep learning.",
      "Master": "Experienced professionals specializing in AI research, engineers working on AI at scale, and business leaders leveraging AI for enterprises."
    },
    "image": c,
    "skills": {
      "Foundation": ["Python", "Data Preprocessing", "Linear Algebra", "Machine Learning", "Data Visualization"],
      "Proficient": ["Python", "Data Preprocessing", "Linear Algebra", "Machine Learning", "Data Visualization", "Deep Learning", "NLP", "Model Deployment", "Reinforcement Learning"],
      "Master": ["Python", "Data Preprocessing", "Linear Algebra", "Machine Learning", "Data Visualization", "Deep Learning", "NLP", "Model Deployment", "Reinforcement Learning", "GANs", "AI for Cloud", "Explainable AI", "Large-Scale AI Systems"]
    },
    "companies": {
      "Foundation": ["TCS", "Infosys", "Wipro", "Cognizant"],
      "Proficient": ["Google", "Amazon", "IBM", "Capgemini"],
      "Master": ["Meta", "Tesla", "Netflix", "NVIDIA"]
    },
    "avgSalary": {
      "Foundation": "₹5 - ₹7 LPA",
      "Proficient": "₹10 - ₹15 LPA",
      "Master": "₹18 - ₹30 LPA"
    },
    "jobGrowth": {
      "Foundation": "20%",
      "Proficient": "25%",
      "Master": "30%"
    },
    "whyChoose": {
      "Foundation": [
        "Beginner-friendly with hands-on exercises",
        "Strong foundation in AI fundamentals",
        "Prepares for entry-level AI & ML roles"
      ],
      "Proficient": [
        "Covers real-world AI applications",
        "Hands-on projects with deep learning models",
        "Prepares for mid-level AI engineer roles"
      ],
      "Master": [
        "Covers cutting-edge AI technologies",
        "Focuses on scalability, automation, and ethical AI",
        "Prepares for senior AI researcher & architect roles"
      ]
    },
    "modules": {
      "Foundation": [
        {
          "title": "Introduction to AI & Machine Learning",
          "topics": ["Types of AI", "ML vs DL", "Real-world applications"]
        },
        {
          "title": "Python for AI",
          "topics": ["NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks"]
        },
        {
          "title": "Mathematics for ML",
          "topics": ["Linear Algebra", "Probability", "Statistics Basics"]
        },
        {
          "title": "Supervised Learning Basics",
          "topics": ["Regression", "Classification", "Model Evaluation"]
        },
        {
          "title": "Unsupervised Learning Basics",
          "topics": ["Clustering", "Dimensionality Reduction"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Handwritten Digit Classification using Python"]
        }
      ],
      "Proficient": [
       {
          "title": "Introduction to AI & Machine Learning",
          "topics": ["Types of AI", "ML vs DL", "Real-world applications"]
        },
        {
          "title": "Python for AI",
          "topics": ["NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks"]
        },
        {
          "title": "Mathematics for ML",
          "topics": ["Linear Algebra", "Probability", "Statistics Basics"]
        },
        {
          "title": "Supervised Learning Basics",
          "topics": ["Regression", "Classification", "Model Evaluation"]
        },
        {
          "title": "Unsupervised Learning Basics",
          "topics": ["Clustering", "Dimensionality Reduction"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Handwritten Digit Classification using Python"]
        },
   {
          "title": "Advanced Machine Learning",
          "topics": ["Decision Trees", "SVM", "Ensemble Methods"]
        },
        {
          "title": "Deep Learning Fundamentals",
          "topics": ["Feedforward Networks", "Backpropagation"]
        },
        {
          "title": "Convolutional Neural Networks (CNNs)",
          "topics": ["Image Classification", "Object Detection"]
        },
        {
          "title": "Natural Language Processing (NLP)",
          "topics": ["Text Preprocessing", "Transformers"]
        },
        {
          "title": "Model Deployment",
          "topics": ["Flask", "FastAPI", "Cloud Deployment"]
        },
        {
          "title": "Capstone Project",
          "topics": ["AI-Powered Chatbot using NLP & Deep Learning"]
        }
      ],
      "Master": [
       {
          "title": "Introduction to AI & Machine Learning",
          "topics": ["Types of AI", "ML vs DL", "Real-world applications"]
        },
        {
          "title": "Python for AI",
          "topics": ["NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks"]
        },
        {
          "title": "Mathematics for ML",
          "topics": ["Linear Algebra", "Probability", "Statistics Basics"]
        },
        {
          "title": "Supervised Learning Basics",
          "topics": ["Regression", "Classification", "Model Evaluation"]
        },
        {
          "title": "Unsupervised Learning Basics",
          "topics": ["Clustering", "Dimensionality Reduction"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Handwritten Digit Classification using Python"]
        },
   {
          "title": "Advanced Machine Learning",
          "topics": ["Decision Trees", "SVM", "Ensemble Methods"]
        },
        {
          "title": "Deep Learning Fundamentals",
          "topics": ["Feedforward Networks", "Backpropagation"]
        },
        {
          "title": "Convolutional Neural Networks (CNNs)",
          "topics": ["Image Classification", "Object Detection"]
        },
        {
          "title": "Natural Language Processing (NLP)",
          "topics": ["Text Preprocessing", "Transformers"]
        },
        {
          "title": "Model Deployment",
          "topics": ["Flask", "FastAPI", "Cloud Deployment"]
        },
        {
          "title": "Capstone Project",
          "topics": ["AI-Powered Chatbot using NLP & Deep Learning"]
        }, 
       {
          "title": "Advanced Neural Networks",
          "topics": ["LSTMs", "GANs", "Attention Mechanisms"]
        },
        {
          "title": "AI for Cloud & Edge Computing",
          "topics": ["AWS Sagemaker", "Azure ML"]
        },
        {
          "title": "Reinforcement Learning",
          "topics": ["Q-Learning", "Policy Gradients", "AlphaGo"]
        },
        {
          "title": "Explainable AI & AI Ethics",
          "topics": ["Interpretability", "Bias Detection"]
        },
        {
          "title": "Large-Scale AI Systems",
          "topics": ["Transformers", "GPT-based Models"]
        },
        {
          "title": "Capstone Project",
          "topics": ["AI-Based Fraud Detection System using Deep Learning"]
        }
      ]
    },
    "mentors": {
      "Foundation": [
        {
          name:"Dr. Pankaj Kumar Singh",
          desc:"AI Engineer",
          img:aiml2,
          experience: '8+ years',
        expertise: ['System Design', 'Cloud Architecture'],
        },
        {
          name:"Sonali Thakur",
          desc:"Jr. AI Engineer",
          img: py2,
          experience: '8+ years',
        expertise: ['System Design', 'Cloud Architecture'],
        }
      ],
      "Proficient": [
        {
          name:"Dr. Pankaj Kumar Singh",
          desc:"AI Engineer",
          img:aiml2,
          experience: '8+ years',
        expertise: ['System Design', 'Cloud Architecture'],
        },
        {
          name:"Sonali Thakur",
          desc:"Jr. AI Engineer",
          img: py2,
          experience: '8+ years',
        expertise: ['System Design', 'Cloud Architecture'],
        }
      ],
      "Master": [
        {
          "name":"Prof. Arun Kumar Singh",
          "desc":"Research Scientist (AI) – AI Research Centre",
          "img":aiml1,
          experience: '8+ years',
          expertise: ['System Design', 'Cloud Architecture'],
        },
      ]
    }
  },
  {
    "id": "cloud-computing-devops",
    "title": "Cloud Computing & DevOps",
    "description": {
      "Foundation": "For beginners and IT professionals exploring cloud platforms like AWS, Azure, and GCP.",
      "Proficient": "For IT professionals and developers specializing in DevOps and cloud automation.",
      "Master": "For experts aiming for Cloud Architect roles, multi-cloud expertise, and DevOps leadership."
    },
    "image":g,
    "skills": {
      "Foundation": [
        "Cloud Computing Fundamentals (AWS, Azure, GCP)",
        "Basics of Virtualization & Containerization",
        "Linux Fundamentals & Shell Scripting",
        "Introduction to DevOps & CI/CD",
        "Networking & Security Basics in the Cloud"
      ],
      "Proficient": [
        "Cloud Computing Fundamentals (AWS, Azure, GCP)",
        "Basics of Virtualization & Containerization",
        "Linux Fundamentals & Shell Scripting",
        "Introduction to DevOps & CI/CD",
        "Networking & Security Basics in the Cloud",
        "Advanced AWS & Azure Services (EC2, RDS, Lambda, Kubernetes)",
        "DevOps Tools (Git, Jenkins, Ansible, Terraform)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Monitoring & Logging (Prometheus, ELK Stack)",
        "Serverless Computing & Cloud Automation"
      ],
      "Master": [
        "Cloud Computing Fundamentals (AWS, Azure, GCP)",
        "Basics of Virtualization & Containerization",
        "Linux Fundamentals & Shell Scripting",
        "Introduction to DevOps & CI/CD",
        "Networking & Security Basics in the Cloud",
        "Advanced AWS & Azure Services (EC2, RDS, Lambda, Kubernetes)",
        "DevOps Tools (Git, Jenkins, Ansible, Terraform)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Monitoring & Logging (Prometheus, ELK Stack)",
        "Serverless Computing & Cloud Automation",
        "Multi-Cloud Strategies (AWS, Azure, GCP)",
        "Kubernetes Advanced Concepts & Helm Charts",
        "Security & Compliance in Cloud (IAM, Encryption, Firewalls)",
        "Site Reliability Engineering (SRE) & Disaster Recovery",
        "DevSecOps & AI-Driven Automation"
      ]
    },
    "companies": {
      "Foundation": ["Infosys", "TCS", "Wipro", "Cognizant"],
      "Proficient": ["Amazon", "Microsoft", "IBM", "Oracle"],
      "Master": ["Google", "Meta", "Netflix", "Tesla", "Adobe"]
    },
    "avgSalary": {
      "Foundation": "₹5 - ₹7 LPA",
      "Proficient": "₹10 - ₹15 LPA",
      "Master": "₹18 - ₹30 LPA"
    },
    "jobGrowth": {
      "Foundation": "18%",
      "Proficient": "25%",
      "Master": "30%"
    },
    "whyChoose": {
      "Foundation": [
        "Beginner-friendly with real-world cloud scenarios",
        "Covers essential cloud services & deployment basics",
        "Prepares for entry-level cloud engineer roles"
      ],
      "Proficient": [
        "Covers DevOps automation & cloud deployment",
        "Hands-on experience with CI/CD pipelines",
        "Prepares for cloud engineer & DevOps specialist roles"
      ],
      "Master": [
        "Covers advanced cloud architecture & DevOps automation",
        "Focuses on scalability, security, and performance",
        "Prepares for senior cloud architect & DevOps lead roles"
      ]
    },
    "modules": {
      "Foundation": [
        {
          "title": "Introduction to Cloud Computing",
          "topics": ["Cloud models (IaaS, PaaS, SaaS)", "Cloud providers"]
        },
        {
          "title": "Virtualization & Containers",
          "topics": ["Virtual machines", "Docker fundamentals"]
        },
        {
          "title": "Linux & Shell Scripting",
          "topics": ["Basic commands", "Automation scripts"]
        },
        {
          "title": "Networking & Security Basics",
          "topics": ["Firewalls", "VPC", "IAM roles"]
        },
        {
          "title": "Introduction to DevOps",
          "topics": ["CI/CD", "Automation basics"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Deploy a Static Website on AWS S3 with CloudFront"]
        }
      ],
      "Proficient": [
        {
          "title": "Introduction to Cloud Computing",
          "topics": ["Cloud models (IaaS, PaaS, SaaS)", "Cloud providers"]
        },
        {
          "title": "Virtualization & Containers",
          "topics": ["Virtual machines", "Docker fundamentals"]
        },
        {
          "title": "Linux & Shell Scripting",
          "topics": ["Basic commands", "Automation scripts"]
        },
        {
          "title": "Networking & Security Basics",
          "topics": ["Firewalls", "VPC", "IAM roles"]
        },
        {
          "title": "Introduction to DevOps",
          "topics": ["CI/CD", "Automation basics"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Deploy a Static Website on AWS S3 with CloudFront"]
        },
        {
          "title": "AWS & Azure Advanced Services",
          "topics": ["Compute", "Storage", "Networking", "Databases"]
        },
        {
          "title": "DevOps Tools & Automation",
          "topics": ["Jenkins", "Ansible", "Docker", "Kubernetes"]
        },
        {
          "title": "Infrastructure as Code",
          "topics": ["Terraform", "CloudFormation"]
        },
        {
          "title": "Monitoring & Logging",
          "topics": ["Prometheus", "Grafana", "ELK Stack"]
        },
        {
          "title": "Serverless Computing",
          "topics": ["AWS Lambda", "Azure Functions"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Automate Deployment of a Web Application using Jenkins & Terraform"]
        }
      ],
      "Master": [
        {
          "title": "Introduction to Cloud Computing",
          "topics": ["Cloud models (IaaS, PaaS, SaaS)", "Cloud providers"]
        },
        {
          "title": "Virtualization & Containers",
          "topics": ["Virtual machines", "Docker fundamentals"]
        },
        {
          "title": "Linux & Shell Scripting",
          "topics": ["Basic commands", "Automation scripts"]
        },
        {
          "title": "Networking & Security Basics",
          "topics": ["Firewalls", "VPC", "IAM roles"]
        },
        {
          "title": "Introduction to DevOps",
          "topics": ["CI/CD", "Automation basics"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Deploy a Static Website on AWS S3 with CloudFront"]
        },
        {
          "title": "AWS & Azure Advanced Services",
          "topics": ["Compute", "Storage", "Networking", "Databases"]
        },
        {
          "title": "DevOps Tools & Automation",
          "topics": ["Jenkins", "Ansible", "Docker", "Kubernetes"]
        },
        {
          "title": "Infrastructure as Code",
          "topics": ["Terraform", "CloudFormation"]
        },
        {
          "title": "Monitoring & Logging",
          "topics": ["Prometheus", "Grafana", "ELK Stack"]
        },
        {
          "title": "Serverless Computing",
          "topics": ["AWS Lambda", "Azure Functions"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Automate Deployment of a Web Application using Jenkins & Terraform"]
        },
        {
          "title": "Multi-Cloud Architecture",
          "topics": ["Hybrid & multi-cloud strategies"]
        },
        {
          "title": "Advanced Kubernetes & Microservices",
          "topics": ["Helm", "Istio", "Service mesh"]
        },
        {
          "title": "Cloud Security & Compliance",
          "topics": ["IAM", "Data encryption", "GDPR compliance"]
        },
        {
          "title": "Site Reliability Engineering (SRE)",
          "topics": ["Chaos engineering", "Observability"]
        },
        {
          "title": "AI & Machine Learning in DevOps",
          "topics": ["Predictive monitoring", "Anomaly detection"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Scalable Cloud-Native Application with Kubernetes & Terraform"]
        }
      ]
    },
    "mentors": {
      "Foundation": [
        {
          "name":"Dr. Pankaj Kumar Singh",
          "desc":"AI Engineer",
          "img":aiml2,
          "experience": "10+ years",
          "expertise": ["AWS", "Kubernetes", "Terraform"]
        },
      ],
      "Proficient": [
        {
          "name":"Dr. Pankaj Kumar Singh",
          "desc":"AI Engineer",
          "img":aiml2,
          "experience": "10+ years",
          "expertise": ["AWS", "Kubernetes", "Terraform"]
        },
      ],
      "Master": [
        {
          "name":"Tarun Kotagiri",
          "desc":"Commercialization and Innovation Strategist – AI Research Centre",
          "img":cyb1,
          "experience": "9+ years",
          "expertise": ["Kubernetes", "AI-Driven Automation", "Cloud Security"]
        }
       
      ]
    }
  },
        
  {
    "id": "full-stack-web-development",
    "title": "Full Stack Web Development",
    "description": {
      "Foundation": "For beginners learning web development, front-end, and basic back-end concepts.",
      "Proficient": "For developers mastering full-stack development, databases, and APIs.",
      "Master": "For experienced developers specializing in scalable apps, DevOps, and CI/CD."
    },
    "image": d,
    "skills": {
      "Foundation": [
        "Basics of HTML, CSS & JavaScript",
        "Responsive Web Design with Bootstrap",
        "Git & GitHub for Version Control",
        "Introduction to Backend with Node.js & Express.js",
        "Database Basics – SQL & CRUD Operations"
      ],
      "Proficient": [
"Basics of HTML, CSS & JavaScript",
        "Responsive Web Design with Bootstrap",
        "Git & GitHub for Version Control",
        "Introduction to Backend with Node.js & Express.js",
        "Database Basics – SQL & CRUD Operations",
        "Advanced JavaScript (ES6+, Async/Await, Modules)",
        "Full Stack Development with MERN (MongoDB, Express.js, React.js, Node.js)",
        "RESTful APIs & Authentication (JWT, OAuth)",
        "Deployment with AWS & Docker",
        "Advanced SQL & NoSQL Databases"
      ],
      "Master": [
"Basics of HTML, CSS & JavaScript",
        "Responsive Web Design with Bootstrap",
        "Git & GitHub for Version Control",
        "Introduction to Backend with Node.js & Express.js",
        "Database Basics – SQL & CRUD Operations",
        "Advanced JavaScript (ES6+, Async/Await, Modules)",
        "Full Stack Development with MERN (MongoDB, Express.js, React.js, Node.js)",
        "RESTful APIs & Authentication (JWT, OAuth)",
        "Deployment with AWS & Docker",
        "Advanced SQL & NoSQL Databases",
        "Microservices Architecture & Serverless Computing",
        "Advanced Frontend Development with Next.js & TypeScript",
        "GraphQL & WebSockets for Real-time Apps",
        "CI/CD Pipelines & Automated Testing",
        "Kubernetes & Cloud-native Deployment"
      ]
    },
    "companies": {
      "Foundation": ["TCS", "Infosys", "Wipro", "Cognizant", "HCL"],
      "Proficient": ["Microsoft", "Google", "Amazon", "Netflix", "Meta"],
      "Master": ["Google", "Uber", "Airbnb", "LinkedIn", "PayPal"]
    },
    "avgSalary": {
      "Foundation": "₹3 - ₹6 LPA",
      "Proficient": "₹7 - ₹12 LPA",
      "Master": "₹15 - ₹30 LPA"
    },
    "jobGrowth": {
      "Foundation": "17%",
      "Proficient": "22%",
      "Master": "30%"
    },
    "whyChoose": {
      "Foundation": [
        "Learn the fundamentals of front-end & basic back-end development",
        "Hands-on project-based learning",
        "Prepares you for entry-level web development roles"
      ],
      "Proficient": [
        "Learn industry-level development with real-world applications",
        "Gain expertise in backend & database management",
        "Prepares for mid-level full stack development roles"
      ],
      "Master": [
        "Covers high-demand topics like microservices & DevOps",
        "Prepares for senior full-stack & software architecture roles",
        "Focuses on scalability, automation, & enterprise-level web development"
      ]
    },
    "modules": {
      "Foundation": [
        {
          "title": "HTML & CSS Basics",
          "topics": ["Elements", "Forms", "Flexbox", "Grid"]
        },
        {
          "title": "JavaScript Essentials",
          "topics": ["Variables", "Functions", "DOM manipulation"]
        },
        {
          "title": "Bootstrap & Responsive Design",
          "topics": ["Grid system", "Media queries"]
        },
        {
          "title": "Git & GitHub Basics",
          "topics": ["Version control", "Repositories"]
        },
        {
          "title": "Intro to Backend (Node.js & Express.js)",
          "topics": ["Basics of server-side development"]
        },
        {
          "title": "Database Fundamentals (SQL & CRUD Operations)",
          "topics": ["Storing & retrieving data"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Personal Portfolio Website"]
        }
      ],
      "Proficient": [
        {
          "title": "HTML & CSS Basics",
          "topics": ["Elements", "Forms", "Flexbox", "Grid"]
        },
        {
          "title": "JavaScript Essentials",
          "topics": ["Variables", "Functions", "DOM manipulation"]
        },
        {
          "title": "Bootstrap & Responsive Design",
          "topics": ["Grid system", "Media queries"]
        },
        {
          "title": "Git & GitHub Basics",
          "topics": ["Version control", "Repositories"]
        },
        {
          "title": "Intro to Backend (Node.js & Express.js)",
          "topics": ["Basics of server-side development"]
        },
        {
          "title": "Database Fundamentals (SQL & CRUD Operations)",
          "topics": ["Storing & retrieving data"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Personal Portfolio Website"]
        },
        {
          "title": "HTML & CSS Basics",
          "topics": ["Elements", "Forms", "Flexbox", "Grid"]
        },
        {
          "title": "JavaScript Essentials",
          "topics": ["Variables", "Functions", "DOM manipulation"]
        },
        {
          "title": "Bootstrap & Responsive Design",
          "topics": ["Grid system", "Media queries"]
        },
        {
          "title": "Git & GitHub Basics",
          "topics": ["Version control", "Repositories"]
        },
        {
          "title": "Intro to Backend (Node.js & Express.js)",
          "topics": ["Basics of server-side development"]
        },
        {
          "title": "Database Fundamentals (SQL & CRUD Operations)",
          "topics": ["Storing & retrieving data"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Personal Portfolio Website"]
        },
        {
          "title": "Advanced JavaScript & ES6+ Features",
          "topics": ["Higher-order functions", "Promises", "Closures"]
        },
        {
          "title": "React.js & State Management",
          "topics": ["Hooks", "Context API", "Redux"]
        },
        {
          "title": "Building RESTful APIs with Express.js",
          "topics": ["Routing", "Middleware", "Authentication"]
        },
        {
          "title": "MongoDB & NoSQL Databases",
          "topics": ["Schema design", "Mongoose ODM"]
        },
        {
          "title": "Docker & AWS Deployment",
          "topics": ["Hosting applications"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Full-Stack E-Commerce Platform"]
        }
      ],
      "Master": [
        {
          "title": "HTML & CSS Basics",
          "topics": ["Elements", "Forms", "Flexbox", "Grid"]
        },
        {
          "title": "JavaScript Essentials",
          "topics": ["Variables", "Functions", "DOM manipulation"]
        },
        {
          "title": "Bootstrap & Responsive Design",
          "topics": ["Grid system", "Media queries"]
        },
        {
          "title": "Git & GitHub Basics",
          "topics": ["Version control", "Repositories"]
        },
        {
          "title": "Intro to Backend (Node.js & Express.js)",
          "topics": ["Basics of server-side development"]
        },
        {
          "title": "Database Fundamentals (SQL & CRUD Operations)",
          "topics": ["Storing & retrieving data"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Personal Portfolio Website"]
        },
        {
          "title": "HTML & CSS Basics",
          "topics": ["Elements", "Forms", "Flexbox", "Grid"]
        },
        {
          "title": "JavaScript Essentials",
          "topics": ["Variables", "Functions", "DOM manipulation"]
        },
        {
          "title": "Bootstrap & Responsive Design",
          "topics": ["Grid system", "Media queries"]
        },
        {
          "title": "Git & GitHub Basics",
          "topics": ["Version control", "Repositories"]
        },
        {
          "title": "Intro to Backend (Node.js & Express.js)",
          "topics": ["Basics of server-side development"]
        },
        {
          "title": "Database Fundamentals (SQL & CRUD Operations)",
          "topics": ["Storing & retrieving data"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Personal Portfolio Website"]
        },
        {
          "title": "Advanced JavaScript & ES6+ Features",
          "topics": ["Higher-order functions", "Promises", "Closures"]
        },
        {
          "title": "React.js & State Management",
          "topics": ["Hooks", "Context API", "Redux"]
        },
        {
          "title": "Building RESTful APIs with Express.js",
          "topics": ["Routing", "Middleware", "Authentication"]
        },
        {
          "title": "MongoDB & NoSQL Databases",
          "topics": ["Schema design", "Mongoose ODM"]
        },
        {
          "title": "Docker & AWS Deployment",
          "topics": ["Hosting applications"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Full-Stack E-Commerce Platform"]
        },
        {
          "title": "HTML & CSS Basics",
          "topics": ["Elements", "Forms", "Flexbox", "Grid"]
        },
        {
          "title": "JavaScript Essentials",
          "topics": ["Variables", "Functions", "DOM manipulation"]
        },
        {
          "title": "Bootstrap & Responsive Design",
          "topics": ["Grid system", "Media queries"]
        },
        {
          "title": "Git & GitHub Basics",
          "topics": ["Version control", "Repositories"]
        },
        {
          "title": "Intro to Backend (Node.js & Express.js)",
          "topics": ["Basics of server-side development"]
        },
        {
          "title": "Database Fundamentals (SQL & CRUD Operations)",
          "topics": ["Storing & retrieving data"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Personal Portfolio Website"]
        },
        {
          "title": "Advanced JavaScript & ES6+ Features",
          "topics": ["Higher-order functions", "Promises", "Closures"]
        },
        {
          "title": "React.js & State Management",
          "topics": ["Hooks", "Context API", "Redux"]
        },
        {
          "title": "Building RESTful APIs with Express.js",
          "topics": ["Routing", "Middleware", "Authentication"]
        },
        {
          "title": "MongoDB & NoSQL Databases",
          "topics": ["Schema design", "Mongoose ODM"]
        },
        {
          "title": "Docker & AWS Deployment",
          "topics": ["Hosting applications"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build a Full-Stack E-Commerce Platform"]
        },
        {
          "title": "Next.js & TypeScript",
          "topics": ["SSR", "SSG", "Advanced front-end architecture"]
        },
        {
          "title": "GraphQL & Real-time Communication",
          "topics": ["WebSockets", "Subscriptions"]
        },
        {
          "title": "Microservices & Serverless Computing",
          "topics": ["AWS Lambda", "Kubernetes"]
        },
        {
          "title": "CI/CD & DevOps",
          "topics": ["Jenkins", "GitHub Actions", "Docker Compose"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Develop & Deploy a Scalable SAAS Platform"]
        }
      ]
    },
    "mentors": {
      "Foundation": [
        {
          "name":"Praveen Rajarathinam",
          "desc":"Full Stack Developer",
          "img":web1,
          "experience": "8+ years",
          "expertise": ["React.js", "Express.js", "MongoDB", "REST APIs"]
        }
      ],
      "Proficient": [
        {
          "name":"Praveen Rajarathinam",
          "desc":"Full Stack Developer",
          "img":web1,
          "experience": "8+ years",
          "expertise": ["React.js", "Express.js", "MongoDB", "REST APIs"]
        }
      ],
      "Master": [
        {
          "name":"Sobit Prasad",
          "desc":"Full Stack Developer",
          "img":web2,
          "experience": "8+ years",
          "expertise": ["React.js", "Express.js", "MongoDB", "REST APIs"]
        }
      ]
    }
  },
  {
    "id": "e-commerce-digital-marketing",
    "title": "E-Commerce & Digital Marketing",
    "description": {
      "Foundation": "For beginners, entrepreneurs, and professionals exploring e-commerce and digital marketing.",
      "Proficient": "For marketers, business owners, and developers specializing in e-commerce and digital strategies.",
      "Master": "For experts aiming for leadership in e-commerce, AI-driven marketing, and business scaling."
    },
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    "skills": {
      "Foundation": [
        "Fundamentals of E-Commerce & Online Business Models",
        "Introduction to Digital Marketing (SEO, Social Media, Google Ads)",
        "Website Development using Shopify & WordPress",
        "Email Marketing & Lead Generation Basics",
        "Google Analytics & Basic Performance Tracking"
      ],
      "Proficient": [
        "Fundamentals of E-Commerce & Online Business Models",
        "Introduction to Digital Marketing (SEO, Social Media, Google Ads)",
        "Website Development using Shopify & WordPress",
        "Email Marketing & Lead Generation Basics",
        "Google Analytics & Basic Performance Tracking",
        "Advanced SEO & Content Marketing",
        "Social Media Advertising & Paid Campaigns",
        "Conversion Rate Optimization (CRO) & Funnel Building",
        "Email & Affiliate Marketing Strategies",
        "Google Analytics, Facebook Pixel & Performance Optimization"
      ],
      "Master": [
        "Fundamentals of E-Commerce & Online Business Models",
        "Introduction to Digital Marketing (SEO, Social Media, Google Ads)",
        "Website Development using Shopify & WordPress",
        "Email Marketing & Lead Generation Basics",
        "Google Analytics & Basic Performance Tracking",
        "Advanced SEO & Content Marketing",
        "Social Media Advertising & Paid Campaigns",
        "Conversion Rate Optimization (CRO) & Funnel Building",
        "Email & Affiliate Marketing Strategies",
        "Google Analytics, Facebook Pixel & Performance Optimization",
        "AI & Automation in Digital Marketing",
        "Data-Driven Marketing & Customer Insights",
        "Omnichannel Marketing Strategies",
        "Growth Hacking & Viral Marketing Techniques",
        "Cross-Border E-Commerce & International Expansion"
      ]
    },
    "companies": {
      "Foundation": ["Amazon", "Flipkart", "Nykaa", "Zomato", "Swiggy"],
      "Proficient": ["Google", "Microsoft", "Myntra", "Tata Cliq", "Adobe"],
      "Master": ["Amazon", "Google", "Tesla", "Reliance Digital", "Meta"]
    },
    "avgSalary": {
      "Foundation": "₹3 - ₹5 LPA",
      "Proficient": "₹6 - ₹10 LPA",
      "Master": "₹12 - ₹25 LPA"
    },
    "jobGrowth": {
      "Foundation": "15%",
      "Proficient": "20%",
      "Master": "30%"
    },
    "whyChoose": {
      "Foundation": [
        "Beginner-friendly, practical learning approach",
        "Covers key e-commerce & digital marketing strategies",
        "Prepares you for entry-level digital marketing & e-commerce roles"
      ],
      "Proficient": [
        "Learn advanced strategies for digital growth",
        "Gain expertise in e-commerce sales funnels & customer retention",
        "Prepares for roles like digital marketing manager & e-commerce strategist"
      ],
      "Master": [
        "Covers AI-driven marketing & growth hacking strategies",
        "Prepares for leadership roles in digital marketing & e-commerce",
        "Focuses on scalability, automation, and international expansion"
      ]
    },
    "modules": {
      "Foundation": [
        {
          "title": "Introduction to E-Commerce",
          "topics": ["Business models (B2B, B2C, D2C)", "Online marketplaces"]
        },
        {
          "title": "Website Development Basics",
          "topics": ["Shopify", "WordPress", "WooCommerce"]
        },
        {
          "title": "Introduction to SEO",
          "topics": ["Keyword research", "On-page & off-page SEO"]
        },
        {
          "title": "Social Media Marketing Basics",
          "topics": ["Facebook", "Instagram", "LinkedIn"]
        },
        {
          "title": "Google Ads & PPC Fundamentals",
          "topics": ["Search ads", "Display ads"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Launch an E-Commerce Store with Basic SEO & Ad Campaign"]
        }
      ],
      "Proficient": [
          {
          "title": "Introduction to E-Commerce",
          "topics": ["Business models (B2B, B2C, D2C)", "Online marketplaces"]
        },
        {
          "title": "Website Development Basics",
          "topics": ["Shopify", "WordPress", "WooCommerce"]
        },
        {
          "title": "Introduction to SEO",
          "topics": ["Keyword research", "On-page & off-page SEO"]
        },
        {
          "title": "Social Media Marketing Basics",
          "topics": ["Facebook", "Instagram", "LinkedIn"]
        },
        {
          "title": "Google Ads & PPC Fundamentals",
          "topics": ["Search ads", "Display ads"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Launch an E-Commerce Store with Basic SEO & Ad Campaign"]
        },
        {
          "title": "Advanced SEO & Content Strategy",
          "topics": ["Backlinks", "Technical SEO", "Content funnels"]
        },
        {
          "title": "Social Media Ads & Performance Marketing",
          "topics": ["Facebook", "Instagram", "YouTube", "LinkedIn ads"]
        },
        {
          "title": "E-Commerce Funnel Optimization",
          "topics": ["Landing pages", "Cart recovery", "Upselling tactics"]
        },
        {
          "title": "Email & Affiliate Marketing",
          "topics": ["Automation", "Segmentation", "Influencer collaborations"]
        },
        {
          "title": "Google Analytics & Facebook Pixel",
          "topics": ["Conversion tracking", "A/B testing"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build & Optimize an E-Commerce Store with a Multi-Channel Marketing Strategy"]
        }
      ],
      "Master": [
        {
          "title": "Introduction to E-Commerce",
          "topics": ["Business models (B2B, B2C, D2C)", "Online marketplaces"]
        },
        {
          "title": "Website Development Basics",
          "topics": ["Shopify", "WordPress", "WooCommerce"]
        },
        {
          "title": "Introduction to SEO",
          "topics": ["Keyword research", "On-page & off-page SEO"]
        },
        {
          "title": "Social Media Marketing Basics",
          "topics": ["Facebook", "Instagram", "LinkedIn"]
        },
        {
          "title": "Google Ads & PPC Fundamentals",
          "topics": ["Search ads", "Display ads"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Launch an E-Commerce Store with Basic SEO & Ad Campaign"]
        },
        {
          "title": "Advanced SEO & Content Strategy",
          "topics": ["Backlinks", "Technical SEO", "Content funnels"]
        },
        {
          "title": "Social Media Ads & Performance Marketing",
          "topics": ["Facebook", "Instagram", "YouTube", "LinkedIn ads"]
        },
        {
          "title": "E-Commerce Funnel Optimization",
          "topics": ["Landing pages", "Cart recovery", "Upselling tactics"]
        },
        {
          "title": "Email & Affiliate Marketing",
          "topics": ["Automation", "Segmentation", "Influencer collaborations"]
        },
        {
          "title": "Google Analytics & Facebook Pixel",
          "topics": ["Conversion tracking", "A/B testing"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Build & Optimize an E-Commerce Store with a Multi-Channel Marketing Strategy"]
        },
        {
          "title": "AI & Automation in Digital Marketing",
          "topics": ["Chatbots", "Predictive analytics", "Marketing automation tools"]
        },
        {
          "title": "Data-Driven Marketing & Customer Insights",
          "topics": ["Customer segmentation", "Behavioral analytics", "Personalization"]
        },
        {
          "title": "Omnichannel Marketing Strategies",
          "topics": ["Integrated campaigns", "Customer journey mapping", "Retention strategies"]
        },
        {
          "title": "Growth Hacking & Viral Marketing",
          "topics": ["Referral programs", "Social proof strategies"]
        },
        {
          "title": "Cross-Border E-Commerce",
          "topics": ["Selling on Amazon Global", "AliExpress", "Shopify Plus"]
        },
        {
          "title": "Capstone Project",
          "topics": ["Develop an AI-Powered E-Commerce Growth Strategy"]
        }
      ]
    },
    "mentors": {
      "Foundation": [
        {
          "name": "Rahul Sharma",
          "role": "Digital Marketing Specialist at Flipkart",
          "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
          "experience": "5+ years",
          "expertise": ["SEO", "Social Media Marketing", "Google Ads"]
        },
        {
          "name": "Priya Mehta",
          "role": "E-Commerce Consultant at Nykaa",
          "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
          "experience": "6+ years",
          "expertise": ["Shopify", "Email Marketing", "Lead Generation"]
        }
      ],
      "Proficient": [
        {
          "name": "Ankit Patel",
          "role": "Digital Marketing Manager at Myntra",
          "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
          "experience": "8+ years",
          "expertise": ["Advanced SEO", "Performance Marketing", "CRO"]
        },
        {
          "name": "Sneha Reddy",
          "role": "E-Commerce Strategist at Tata Cliq",
          "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
          "experience": "7+ years",
          "expertise": ["Affiliate Marketing", "Funnel Optimization", "Google Analytics"]
        }
      ],
      "Master": [
        {
          "name": "Vikram Singh",
          "role": "Head of Digital Marketing at Amazon",
          "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
          "experience": "12+ years",
          "expertise": ["AI in Marketing", "Omnichannel Strategies", "Growth Hacking"]
        },
        {
          "name": "Ananya Das",
          "role": "E-Commerce Director at Reliance Digital",
          "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
          "experience": "10+ years",
          "expertise": ["Cross-Border E-Commerce", "Data-Driven Marketing", "Automation"]
        }
      ]
    }
  }


  
  
  
];

const CoursesPage = () => {
  const location=useLocation();
  const course=location.state;
  const [selectedCourse, setSelectedCourse] = useState(course.title?course:courses[0]);
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const {handleRazorpayScreen}=useContext(Context);
  const [selectedLevel, setSelectedLevel] = useState('foundation');
  useEffect(()=>{
    setSelectedCourse(location.state.course)
    console.log(location.state.course)
    window.scrollTo(0, 0)
  },[location.state.course])
  const calculatePrice=(track)=>{
    if(track=="Foundation"){
        return 4999;
    }else if(track=="Proficient"){
        return 6999;
    }else{
        return 9999;
    }
}

const calculatewoPrice=(track)=>{
  if(track=="Foundation"){
      return 6499;
  }else if(track=="Proficient"){
      return 10999;
  }else{
      return 18999;
  }
}
  return (
    <div className="pt-16 min-h-screen bg-gray-50 be-vietnam-pro-regular">
      {/* Course Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Courses</h1>
          <p className="mt-4 text-xl text-gray-600">
            Transform your career with industry-leading courses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Track Selection */}
        

        {/* Course Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Course List */}
         

          {/* Course Details */}
          <div id="maincourse" className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-64 object-cover rounded-xl mb-8"
              />

              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                {selectedCourse.title}
              </h2>

              <div className="mb-1">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Choose Your Learning Track</h2>
          <div className="w-4xl mx-auto px-2 py-5">
        

        {/* Program Details Section */}
        <div className="mb-5">
          <div className="bg-white rounded-xl  p-0">
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-gray-100 p-1">
                {tracks.map((level) => (
                  <button
                    key={level.name}
                    onClick={() => {setSelectedTrack(level)}}
                    style={{width: window.screen.width>700?200:100,}}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedTrack.name == level.name
                        ? 'bg-white shadow-md text-indigo-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center mb-8">
              {selectedTrack.icon}
              <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                {selectedTrack.name}
              </h2>
              <p className="text-gray-600">
                {selectedTrack.description}
              </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Program Features</h3>
                <ul className="space-y-2">
                  {selectedCourse.whyChoose?selectedCourse.whyChoose[selectedTrack.name].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  )):""}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-indigo-50 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Program Details</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-medium">Duration:</span> {selectedTrack.duration}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Price:</span> {selectedTrack.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className='flex flex-row justify-center mb-5'>
        <button style={{margin:10,width:window.screen.width>700?300:200}} onClick={()=>handleRazorpayScreen(calculatePrice(selectedTrack.name),"April_2025",selectedTrack.name,selectedCourse.title)}  className="bg-indigo-800 text-white px-4 py-3 rounded-lg text-lg font-medium hover:bg-indigo-400 transition-colors duration-200">
              Enroll now
            </button>
            <button style={{margin:10,width:window.screen.width>700?300:200}}   className="bg-white text-indigo-800 shadow-lg px-4 py-3 rounded-lg text-lg font-medium hover:bg-indigo-400 transition-colors duration-200">
              Enquire
            </button>
        </div>
        

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Skills You'll Learn</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.skills[selectedTrack.name].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
             
              {/* Market Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 text-indigo-800 mb-2">
                    <Briefcase className="w-5 h-5" />
                    <h4 className="font-semibold">Average Salary</h4>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{selectedCourse.avgSalary[selectedTrack.name]}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-2 text-indigo-800 mb-2">
                    <Trophy className="w-5 h-5" />
                    <h4 className="font-semibold">Job Growth</h4>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{selectedCourse.jobGrowth[selectedTrack.name]}</p>
                </div>
              </div>

              {/* Companies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Top Hiring Companies</h3>
                <div className="flex flex-wrap gap-4">
                  {selectedCourse.companies[selectedTrack.name].map((company) => (
                    <div key={company} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                      <Building2 className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">{company}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose This Course?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCourse.whyChoose[selectedTrack.name].map((reason, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modules */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Course Modules</h3>
                <div className="space-y-4">
                  {selectedCourse.modules[selectedTrack.name].map((module, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold mb-3">{module.title}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-indigo-800" />
                            <span className="text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentors */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Learn from Industry Experts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedCourse.mentors[selectedTrack.name].map((mentor, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={mentor.img}
                          alt={mentor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{mentor.name}</h4>
                          <p className="text-sm text-gray-600">{mentor.desc}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-indigo-800" />
                          <span className="text-sm">{mentor.experience} experience</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Courses_copy/>
      <FAQ/>
    </div>
  );
};

export default CoursesPage;