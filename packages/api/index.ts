import app from "app";

const PORT = process.env.PORT || 3001;
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");
const DATABASE_URL = process.env.DATABASE_URL;

app.listen(PORT, () => {
  console.log(`API Server Started at ${PORT}`);
});
