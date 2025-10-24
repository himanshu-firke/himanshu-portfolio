import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory storage for demo purposes
// For production, use Vercel KV, Redis, or PostgreSQL
let viewCount = 50;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    // Get current view count
    return res.status(200).json({ views: viewCount });
  }

  if (req.method === 'POST') {
    // Increment view count
    viewCount++;
    return res.status(200).json({ views: viewCount });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
