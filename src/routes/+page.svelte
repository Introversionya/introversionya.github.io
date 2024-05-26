<script>
	let title = "home";

	let name = '';
	let surname = '';
	let message = '';

	async function write() {
		const response = await fetch('/api', {
			method: "POST",
			body: JSON.stringify({ name, surname }),
			headers: {
				'content-type': 'application/json'
			}
		})
		// получаем ответ от +server.js
		message = await response.text();
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>home!</h1>
<a href="/about">about</a>

<!-- <h2>Тест добавления в БД:</h2>

<label>
	Введите имя:
	<input type="text" bind:value={name}>
</label>

<label>
	Введите фамилию:
	<input type="text" bind:value={surname}>
</label>

<button on:click={write}>Записать данные в БД</button>

<p>{message}</p> -->
