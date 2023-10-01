import { BiSolidMessageSquareDots } from "react-icons/bi";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { Activity, Code2, Cog, Database, Kanban } from "lucide-react";

export const Navlinks = [
  {
    title: "Home",
    path: "/",
    icon: AiFillHome,
  },
  {
    title: "About Us",
    path: "/about",
    icon: FaUserGroup,
  },
  {
    title: "Services",
    path: "/services",
    icon: AiFillSetting,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: BiSolidMessageSquareDots,
  },
];

export const ChooseUs = [
  {
    title: "Expertise:",
    content:
      "Our consultants and trainers are certified Salesforce professionals with a deep understanding of the plaform.",
  },
  {
    title: "Customer-Centric Approach:",
    content:
      "Your success is our priority. We take the time to understand your needs and tailor our services accordingly. ",
  },
  {
    title: "Lifelong Learning:",
    content:
      "Salesforce is constantly evolving. We stay at the forefront of industry trends to provide you with the latest insights and strategies. ",
  },
];

export const contactForm = [
  { name: "firstname", placeholder: "First name" },
  { name: "lastname", placeholder: "Last name" },
  { name: "email", placeholder: "Email" },
  { name: "mobile", placeholder: "Mobile Number" },
];

export const OurServices = [
  {
    title: "Salesforce Implementation",
    content:
      "We are a team of highly expertise and experience in Salesforce which has enabled us to implement and support various business use cases in the Sales, Service, Experience, and Marketing Clouds.",
    Icon: Cog,
  },
  {
    title: "Custom Development",
    content:
      "We are a team of highly expertise and experience in Salesforce which has enabled us to implement and support various business use cases in the Sales, Service, Experience, and Marketing Clouds.",
    Icon: Code2,
  },
  {
    title: "Data Management",
    content:
      "We are a team of highly expertise and experience in Salesforce which has enabled us to implement and support various business use cases in the Sales, Service, Experience, and Marketing Clouds.",
    Icon: Database,
  },
  {
    title: "Data Management",
    content:
      "We are a team of highly expertise and experience in Salesforce which has enabled us to implement and support various business use cases in the Sales, Service, Experience, and Marketing Clouds.",
    Icon: Database,
  },
  {
    title: "Data Management",
    content:
      "We are a team of highly expertise and experience in Salesforce which has enabled us to implement and support various business use cases in the Sales, Service, Experience, and Marketing Clouds.",
    Icon: Database,
  },
  {
    title: "Data Management",
    content:
      "We are a team of highly expertise and experience in Salesforce which has enabled us to implement and support various business use cases in the Sales, Service, Experience, and Marketing Clouds.",
    Icon: Database,
  },
  {
    title: "Support and Maintenance",
    content:
      "We are a team of highly expertise and experience in Salesforce which has enabled us to implement and support various business use cases in the Sales, Service, Experience, and Marketing Clouds.",
    Icon: Kanban,
  },
  {
    title: "Salesforce Health Check",
    content:
      "We conduct comprehensive assessments of our client's Salesforce implementations to identify areas for improvement and provide recommendations for optimization.",
    Icon: Activity,
  },
];
