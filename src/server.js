import express from 'express';
import {renderToString} from 'react-dom/server';
import App from './App';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('dist/public'));
app.get('/{*splat}', (req, res) => {
    const html = renderToString(<App />);
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>SSR React</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <div id="root">${html}</div>
                <script src="/client.js"></script>
            </body>
        </html>
        `)
});


app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
});