const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    id: {
        type: Int16Array,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    isdone: {
        type: Boolean,
    },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
