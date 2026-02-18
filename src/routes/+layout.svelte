<script lang="ts">
	import Footer from "$lib/components/footer/Footer.svelte";
	import Nav from "$lib/components/nav/Nav.svelte";
	import "$lib/styles/global.css"
	// <!-- ! Keep (Imports the theme of the page) -->
	import { theme } from "$lib/stores/theme"; 


	let { children } = $props();
</script>

<svelte:head>
</svelte:head>
<Nav/>
{@render children()}
<Footer/>

