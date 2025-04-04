app.put("/students/:id", async (req, res) => {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedStudent);
});

app.get("/students/search", async (req, res) => {
    const { name } = req.query;
    const students = await Student.find({ name: new RegExp(name, 'i') });
    res.json(students);
});
