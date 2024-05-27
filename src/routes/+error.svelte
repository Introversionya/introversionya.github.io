<!-- обрабатываем ошибки -->
<script>
	import { page } from "$app/stores";
</script>

<main>
	<h1>Ошибка: {$page.status}</h1>
	<a href="/">Вернуться на главную</a>
	<button on:click={() =>location.reload()}>Перезагрузить страницу</button>
</main>

