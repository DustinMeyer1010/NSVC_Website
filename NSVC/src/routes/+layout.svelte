<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Nav from './Nav.svelte';
	import "../global.css"
	import Footer from './Footer.svelte';
	import { theme } from '$lib/theme';
	import { get } from 'svelte/store';

	get(theme) // Retrieves the theme for the webpage

	let { children } = $props();


</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<Nav/>
{@render children()}
<Footer/>
