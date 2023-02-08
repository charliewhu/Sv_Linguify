<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Home</h1>

<ul data-testid="textList">
	{#each data.texts as text}
		<li data-testid="textListItem">
			<a href={`texts/${text.id}`}>
				{text.name}
			</a>
		</li>
	{/each}
</ul>
