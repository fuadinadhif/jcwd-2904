import multer from "multer";
import path from "path";

export function uploader() {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `img-${Date.now().toString().slice(-7)}`;
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

  return multer({ storage });
}
