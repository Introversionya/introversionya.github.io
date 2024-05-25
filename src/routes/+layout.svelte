<script>
	import "../assets/scss/global.scss"
	import { updated } from '$app/stores';
</script>

<slot />

{#if $updated}
  <div class="toast">
    <p>
      A new version of the app is available
      <button on:click={() => location.reload()}>
        reload the page
      </button>
    </p>
  </div>
{/if}

<button on:click={() => updated.check()}>
	проверить
</button>