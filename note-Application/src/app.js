import express from 'express';
import path from 'path';
import url from 'url';
const__filename = url.fileURLToPath(new URL('.', import.meta.url));
const_dirnam = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(_dirname, 'public')));
app.use(express.json());
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});