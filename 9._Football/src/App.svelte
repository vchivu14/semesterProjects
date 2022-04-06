<script>
	import { onMount } from "svelte";
	// import { baseURL } from "./store/generalStore.js";

	let players = "";

	onMount(async () => {
		// const response = await fetch("http://localhost:3000/players");
		// const response = await fetch($baseURL + "/players");
		// we eliminated the need for baseURL since both apps are now served from one server
		const response = await fetch("/api/players");
		// const result = await response.json();
		const { data:playersArray } = await response.json();
		// console.log(data);
		players = playersArray;
	});
</script>

<main>
	<!-- <h1>{JSON.stringify(players)}</h1> -->
	<h1>{players[0]?.name}</h1>

</main>
<footer>
	©{new Date().getFullYear()}
	Contact
	About
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 60px);
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>