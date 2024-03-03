// importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
importScripts("/comlink/umd/comlink.js");

async function fetchData(index) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
			.then((response) => response.json())
			.then((json) => {
				return json;
			})
			.catch((error) => {
				console.log(error)
			});
}

const obj = {
	counter: 0,
	todos: [],
	inc() {
		this.counter++;
	},
	async addTodo(index) {
		const data = await fetchData(index);
		this.todos.push(data);
	}
};

Comlink.expose(obj);
