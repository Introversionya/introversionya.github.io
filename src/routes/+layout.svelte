<script>
	// import { updated } from '$app/stores';
	// import "../assets/scss/global.scss"
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

<slot />

<!-- {#if $updated}
  <div class="toast">
    <p>
      Доступна новая версия страницы
      <button on:click={() => location.reload()}>
        Перезагрузить страницу
      </button>
    </p>
  </div>
{/if} -->
