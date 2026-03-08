import Teacher from "../models/Teacher.js";

/* Get Teachers */
export const getTeachers = async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
};

/* Add Teacher */
export const addTeacher = async (req, res) => {
  try {
    const { name, subject, degree, exp } = req.body;

    const photo = req.file ? `/uploads/${req.file.filename}` : "";

    const teacher = new Teacher({
      name,
      subject,
      degree,
      exp,
      photo
    });

    await teacher.save();

    res.json({ message: "Teacher Added", teacher });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Delete */
export const deleteTeacher = async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: "Teacher Deleted" });
};