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

</style>