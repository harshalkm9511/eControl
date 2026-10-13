import { get } from "./server";
get("/", (req, res)=>{
    res.send("server is running on port 3000");
});