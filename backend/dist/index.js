import express from "express";
const app = express();
// GET - to get some data from Backend or from DB
// PUT - Modifies data
// POST - If you want to create a blog [post] - want to submit data to the server.
// DELETE - If you want to delete any data or statment.
app.use(express.json());
app.post("/user/:id", (req, res, next) => {
    console.log(req.params.id);
    return res.send("Hellow");
});
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map