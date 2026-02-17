<script lang="ts">
	import Footer from "$lib/components/footer/Footer.svelte";
	import Nav from "$lib/components/nav/Nav.svelte";
import "$lib/styles/global.css"

	let { children } = $props();
</script>

<svelte:head>
</svelte:head>
<Nav/>
{@render children()}
<Footer/>

