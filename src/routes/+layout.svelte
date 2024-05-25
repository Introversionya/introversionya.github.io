<script>
	import { updated } from '$app/stores';
	import "../assets/scss/global.scss"
</script>

<slot />

{#if $updated}
  <div class="toast">
    <p>
      Доступна новая версия страницы
      <button on:click={() => location.reload()}>
        Перезагрузить страницу
      </button>
    </p>
  </div>
{/if}
