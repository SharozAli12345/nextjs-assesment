import fs from 'fs';
import path from 'path';
import { compareFileName } from '../../utils/index'
export default function handler(req, res) {
    const { sortBy } = req.query;
    const files = getFiles(sortBy);
    res.status(200).json({ data: files });
}

const getFiles = (sortBy) => {
    const csvFilePath = path.join(process.cwd(), 'public', 'data.csv');
    const dataArray = [];
    const csvData = fs.readFileSync(csvFilePath, 'utf-8');
    const lines = csvData.split('\n');
    lines.forEach(line => {
        const [createdAt, fileName] = line.split(';');
        dataArray.push({ createdAt, fileName });
    });
    switch (sortBy) {
        case 'createdAt-asc':
            dataArray.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            break;
        case 'createdAt-dsc':
            dataArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case 'fileName-asc':
            dataArray.sort((a, b) => compareFileName(a.fileName, b.fileName));
            break;
        case 'fileName-dsc':
            dataArray.sort((a, b) => compareFileName(b.fileName, a.fileName));
            break;
        default:
            break;
    }
    return dataArray
}