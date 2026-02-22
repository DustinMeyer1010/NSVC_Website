<script lang=ts>
	import type { CoachesCard, CoachInfo } from "$lib/components/namespaces/coaches";

    let {
        children,
        link, 
    } : CoachesCard.props = $props()
</script>


<a href={link}>
    {@render children?.()}
</a>




<style>
    a {
        color: var(--text);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--nav);
        height: 500px;
        min-width: 700px;
        padding: 1.5rem;
        border-radius: 14px;
        overflow-y: scroll;
        position: relative;
    }

    a:visited {
        color: var(--text);
    }
</style>