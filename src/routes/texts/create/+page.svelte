<script>
	import { enhance } from '$app/forms';
</script>

<title>New Text</title>

<h1>Add Todo</h1>

<section class="container">
	<form method="POST" use:enhance>
		<input type="text" name="name" id="name" placeholder="Name" />
		<textarea name="body" id="body" placeholder="Body" />
		<button type="submit"> Create </button>
	</form>
</section>
