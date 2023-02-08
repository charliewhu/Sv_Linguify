<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.name}</title>
</svelte:head>

<h1>
	{data.name}
</h1>

<p>
	{data.body}
</p>
