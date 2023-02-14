import ky from "ky";

// for saving parts of url
const api = ky.create({
    prefixUrl: "https://jsonplaceholder.typicode.com"
});
// for saving private keys / headers etc
const secureAPI = api.extend({
    headers: {
        Authorization: "token"
    }
});

async function getAllTodos() {
    try {
        // const todos = await ky
        // .get("https://jsonplaceholder.typicode.com/todos")
        // we don`t need apply ".then" because this library has more simplified syntax

        // more structured version:
        const todos = await api.get("todos").json();
        console.log(todos);
    } catch (e) {
        console.error(e.message);
    }
}

async function addTodo() {
    const newTodo = {title: "Habib", completed: true, userId: 4};
    try {
        const todos = await ky
            .post("https://jsonplaceholder.typicode.com/todos", {json: newTodo})
            .json();
        console.log(todos);
    } catch (e) {
        console.error(e);
    }
}

export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={getAllTodos}>Click me to get</button>
            <button onClick={addTodo}>Click me to add</button>
        </div>
    );
}
