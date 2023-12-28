import { Router } from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = Router();

router.get('/', (req, res) => {
    res.sendFile(join(__dirname, './api.routers.json'));
});

export default router;