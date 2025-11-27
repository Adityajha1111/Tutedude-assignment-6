const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
const PORT = process.env.PORT || 3000;


// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));


// Optional: proxy API requests to backend (useful for dev or single-EC2 setup)
if (process.env.BACKEND_URL) {
app.use('/api', createProxyMiddleware({ target: process.env.BACKEND_URL, changeOrigin: true }));
}


// fallback to index.html for SPA
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => console.log(`Frontend listening on ${PORT}`));