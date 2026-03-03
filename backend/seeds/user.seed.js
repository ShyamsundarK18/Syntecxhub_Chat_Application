import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.js";

config();

const seedUsers = [
  {
    email: "aarav.malhotra@example.com",
    fullName: "Aarav Malhotra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    email: "sanya.kapoor@example.com",
    fullName: "Sanya Kapoor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    email: "vihaan.reddy@example.com",
    fullName: "Vihaan Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    email: "anika.sharma@example.com",
    fullName: "Anika Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    email: "ishaan.nair@example.com",
    fullName: "Ishaan Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    email: "meher.singh@example.com",
    fullName: "Meher Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    email: "kabir.patel@example.com",
    fullName: "Kabir Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    email: "tara.iyer@example.com",
    fullName: "Tara Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    email: "devansh.gupta@example.com",
    fullName: "Devansh Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    email: "ritika.verma@example.com",
    fullName: "Ritika Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/73.jpg",
  },
  {
    email: "aditya.chopra@example.com",
    fullName: "Aditya Chopra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    email: "navya.menon@example.com",
    fullName: "Navya Menon",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    email: "yash.thakur@example.com",
    fullName: "Yash Thakur",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/84.jpg",
  },
  {
    email: "kavya.desai@example.com",
    fullName: "Kavya Desai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/59.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
