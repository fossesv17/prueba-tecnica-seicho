import express from 'express';
import cors from "cors";
import workerRoutes from "./routes/worker";
import projectRoutes from "./routes/project";

const app = express();
const PORT = 5000;


app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/workers", workerRoutes);


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
});