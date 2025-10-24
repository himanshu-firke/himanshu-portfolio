import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { handleDemo } from "./routes/demo";

const MONGODB_URI = process.env.MONGODB_URI || '';

// MongoDB Models
const viewCounterSchema = new mongoose.Schema({
  count: { type: Number, default: 50 },
  lastUpdated: { type: Date, default: Date.now },
}, { timestamps: true });

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const ViewCounter = mongoose.models.ViewCounter || mongoose.model('ViewCounter', viewCounterSchema);
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Connect to MongoDB
let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
}

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Connect to MongoDB on server start
  connectDB();

  // Views API
  app.get("/api/views", async (_req, res) => {
    try {
      let counter = await ViewCounter.findOne();
      if (!counter) {
        counter = await ViewCounter.create({ count: 50 });
      }
      res.json({ views: counter.count });
    } catch (error) {
      console.error('Error fetching views:', error);
      res.status(500).json({ error: 'Failed to fetch views', views: 50 });
    }
  });

  app.post("/api/views", async (_req, res) => {
    try {
      let counter = await ViewCounter.findOne();
      if (!counter) {
        counter = await ViewCounter.create({ count: 51 });
      } else {
        counter.count += 1;
        counter.lastUpdated = new Date();
        await counter.save();
      }
      res.json({ views: counter.count });
    } catch (error) {
      console.error('Error incrementing views:', error);
      res.status(500).json({ error: 'Failed to increment views', views: 50 });
    }
  });

  // Contact API
  app.post("/api/contact", async (req, res) => {
    try {
      const { email, name, subject, message } = req.body;

      if (!email || !name || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const contact = await Contact.create({
        email,
        name,
        subject,
        message,
        submittedAt: new Date(),
      });

      res.status(201).json({ 
        success: true, 
        message: 'Message sent successfully!',
        id: contact._id 
      });
    } catch (error) {
      console.error('Error submitting contact:', error);
      res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
