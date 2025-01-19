import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const tempDir = path.resolve(__dirname, "../public/temp");

    // Ensure the directory exists
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Using original name, but ensure no unsafe names elsewhere
  },
});

export const upload = multer({ 
  storage,
});
