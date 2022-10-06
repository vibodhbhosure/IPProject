const fs = require("fs");
const path = require("path");
const dirCodes = path.join(__dirname, "codes");
const { v4:uuid } = require("uuid"); // require v4 as uuid

if (!fs.existsSync(dirCodes)) { // if the directory does not exist
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, code) => {
    const jobId = uuid();
    const fileName = `${jobId}.${format}`;
    const filePath = path.join(dirCodes, fileName);
    await fs.writeFileSync(filePath, code);
    return filePath
};

module.exports = {generateFile,};
