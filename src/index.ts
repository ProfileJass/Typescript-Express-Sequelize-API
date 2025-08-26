import { app } from "node/lib/request";

const port = 8001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});