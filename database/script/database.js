const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data.json'); // fixed typo

class Todo {
    static getTodos() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) {
                        return reject(err);
                    } else {
                        resolve(JSON.parse(data));
                    }
                }
            );
        });
    }

    static addTodo(name) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) {

                        return reject(err);
                    }
                    data = JSON.parse(data);
                    let newTask = {
                        id: uuidv4(),
                        name
                    };
                    data.unshift(newTask); // add new task to the beginning
                    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => { // write the updated array
                        if (err) {
                            return reject(err);
                        }
                        resolve("Task added successfully");
                    });
                }
            );
        });
    }

    static deleteTodo(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filePath,
                { encoding: 'utf-8' },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    const newData = data.filter(todo => todo.id !== id);
                    fs.writeFile(filePath, JSON.stringify(newData, null, 2), (err) => {
                        if (err) return reject(err);
                        resolve("Task deleted successfully");
                    });
                }
            );
        });
    }
}

module.exports = Todo;