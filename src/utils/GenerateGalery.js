import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDirectory = path.join(__dirname, "../../public/galeri");
const outputFilePath = path.join(__dirname, "../../src/data/gallery_data.json");
const baseUrl = "/galeri/";

const generateGalleryJson = () => {
  let images = [];
  try {
    const files = fs.readdirSync(imageDirectory);

    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext);
    });

    imageFiles.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || "0");
      const numB = parseInt(b.match(/\d+/)?.[0] || "0");
      return numA - numB;
    });

    images = imageFiles.map((file, index) => {
      const id = index + 1;
      const fileName = file;
      const src = baseUrl + fileName;
      const alt = `Aktivitas Paranormal ${id}`;

      return {
        id,
        fileName,
        src,
        alt,
      };
    });

    const outputDir = path.dirname(outputFilePath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(images, null, 2), "utf8");
    console.log(
      `✅ Berhasil membuat ${images.length} item galeri di: ${outputFilePath}`
    );
  } catch (error) {
    console.error(`❌ Gagal membuat data galeri: ${error.message}`);
  }
};

generateGalleryJson();
