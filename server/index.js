import app from './App.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000; // fallback if PORT not set

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});