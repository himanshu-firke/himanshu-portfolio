import { Router } from "express";

const router = Router();

// In-memory storage (for simplicity - in production use a database)
let viewCount = 50; // Starting from 50

// Get current view count
router.get("/api/views", (req, res) => {
  res.json({ views: viewCount });
});

// Increment view count
router.post("/api/views/increment", (req, res) => {
  viewCount++;
  res.json({ views: viewCount });
});

export default router;
