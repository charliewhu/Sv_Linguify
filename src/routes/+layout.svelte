<nav class="container-fluid">
	<ul>
		<li>
			<a class="contrast" href="/"><strong>Linguify</strong></a>
		</li>
	</ul>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/texts/create">Create Text</a></li>
	</ul>
</nav>

<main>
	<section class="container">
		<slot />
	</section>
</main>

<style global>
	@import '@picocss/pico';
</style>
