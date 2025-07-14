import dotenv from "dotenv";
import app from "./app.js";
import connectToDatabase from "./db/db.js";

dotenv.config({path: "./env"});

connectToDatabase()
.then(() => {
    app.on("error", (err) => {
        console.error("Server error:", err);
        throw err;
    });

    const PORT = process.env.PORT || 8000;
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
})
.catch((error) => { 
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process with failure
});
