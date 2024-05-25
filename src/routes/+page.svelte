<script>
	import { dbRef } from '$lib/firebase.js';
	import { set } from "firebase/database";
	let data = { myName: "Anton" };
	
	const writeData = () => {
		set(dbRef, data)
			.then(() => console.log("Data written successfully"))
			.catch(error => console.error("Error writing data:", error));
	};

	let counter = 0;
	let title = "home";
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>home!</h1>
<a href="/about">about</a>
<button
	class="test"
	on:click={() => counter++}>counter++ | count: {counter}</button
>

<button on:click={writeData}>Write Data</button>
