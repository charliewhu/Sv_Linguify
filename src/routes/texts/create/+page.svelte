<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>New Text</title>
</svelte:head>

<h1>Add Text</h1>

<form method="POST" use:enhance>
	<input type="text" name="name" id="name" placeholder="Name" />
	<textarea name="body" id="body" placeholder="Body" />
	<button type="submit"> Create </button>
</form>
