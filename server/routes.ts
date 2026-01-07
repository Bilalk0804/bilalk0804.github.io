import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve resume PDF
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(__dirname, "..", "public", "resume.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Mohd_Bilal_Khan_Resume.pdf"');
      res.sendFile(resumePath);
    } else {
      // If resume file doesn't exist, return a 404
      res.status(404).json({ 
        message: "Resume not found. Please ensure the resume.pdf file is placed in the public directory." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
