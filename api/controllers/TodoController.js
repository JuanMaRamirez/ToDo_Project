import TodosModel from "../models/TodoModel.js";

/*Methods*/

//Show all ToDos
export const getAllTodo = async (req, res) => {
  try {
    const todos = await TodosModel.findAll();
    res.status(200).json({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//Show one ToDo
export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await TodosModel.findOne({
      where: { id: id, status: "active" },
    });

    if (!todo) {
      res.status(404).json({
        status: "error",
        message: "No todo found",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
//Create a ToDo
export const createTodo = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newTodo = await TodosModel.create({
      title: title,
      content: content,
    });
    res.status(201).json({
      status: "success",
      data: { newTodo },
    });
  } catch (error) {
    console.log(error);
  }
};
//Update a ToDo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await TodosModel.findOne({
      where: { id: id, status: "active" },
    });

    if (!todo) {
      res.status(404).json({
        status: "error",
        message: "Can't finde todo, invalid ID",
      });
      return;
    }

    await TodosModel.update(req.body, {
      where: { id: id, status: "active" },
    });
    res.status(204).json({
      status: "success",
      message: "ToDo updated successfully",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Delete a ToDo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await TodosModel.findOne({
      where: { id: id, status: "active" },
    });
    if (!todo) {
      res.status(404).json({
        status: "error",
        message: "Invalid ID",
      });
      return;
    }
    await todo.destroy();
    res.status(204).json({ status: "deleted", message: "ToDo deleted" });
  } catch (error) {
    console.log(error);
  }
};
