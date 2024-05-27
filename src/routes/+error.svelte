<script>
	import { page } from '$app/stores';
</script>

<!-- обрабатываем ошибки -->
<h1>{$page.status}</h1>
<p>Хм, страницы <code>{$page.url.pathname}</code> нет</p>

<style lang="scss">
	code {
		padding: 5px 10px;
		background-color: rgb(36, 36, 36);
		color: #fff;
		border-radius: 5px;
	}
</style>