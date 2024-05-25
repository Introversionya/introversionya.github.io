<script>
	let counter = 0;
	let title = 'home';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>home!</h1>
<a href="/about">about</a>
<button class="test" on:click={() => counter++}>counter++ | count: {counter}</button>
