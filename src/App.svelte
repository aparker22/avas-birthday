<script lang="ts">
	// export let name: string = "Ava";
	import "./Invitation.svelte";
	import Invitation from "./Invitation.svelte";
	let src = "images/strange.jpeg";
</script>

<main>
	<h3>Ava's Party Page</h3>
	<!-- <p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p> -->
	<img {src} alt="Dr. Strange" />
	<Invitation />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		background-color: black;
		display: flex;
		width: 100%;
		flex-direction: column;
	}

	h3 {
		color: #c43737;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 400;
		margin: 10px;
	}

	img {
		width: 100%;
	}

	@media (min-width: 460px) {
		h3 {
			font-size: 3em;
		}
	}
</style>
