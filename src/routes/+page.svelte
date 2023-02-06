<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<title>Home</title>

{#each data.texts as text}
	<p>{text.name}</p>
{/each}
