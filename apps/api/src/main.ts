import * as express from "express";
import * as cors from "cors";
const app = express();

app.use(cors());

app.get("/", (_req, res) => {
    const user: User = {
        foo: false,
        id: 1,
        username: "test"
    }
    res.json(user);
})

app.listen(3333, () => {
    console.log(`🚀 App started on port 3333`)
})
