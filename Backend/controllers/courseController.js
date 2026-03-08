import Course from "../models/Course.js";

// ➕ CREATE COURSE (Admin Only)
export const createCourse = async (req, res) => {
  try {
    const { name } = req.body;

    const course = await Course.create({ name });

    res.status(201).json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📚 GET ALL COURSES (Public)
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏ UPDATE COURSE (Admin Only)
export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const course = await Course.findByIdAndUpdate(id, { name }, { new: true });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ DELETE COURSE (Admin Only)
export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
