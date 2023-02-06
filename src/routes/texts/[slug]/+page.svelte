<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<title>{data.name}</title>

<h1>
	{data.name}
</h1>

<p>
	{data.body}
</p>
