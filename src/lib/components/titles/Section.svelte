<script lang="ts">
	import type { Snippet } from "svelte";



    type tPosition = "center" | "left" | "right"

    let {
        children,
        size = 50,
        position = "center",
    } : {
        children: Snippet,
        size?: number,
        position?: tPosition,
    } = $props()

    let leftLineStyle = $derived.by(() => {
        if (position != "left") {
            return ""
        }

        return "flex-grow: 0; flex-basis: 5%"
    })

    let rightLineStyle = $derived.by(() => {
        if (position != "right") {
            return ""
        }

        return "flex-grow: 0; flex-basis: 5%"
    })

</script>


<div>
    <hr style={leftLineStyle}>
    <h1 style="--size: {size}px">{@render children()}</h1>
    <hr style={rightLineStyle}>
</div>


<style>

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        letter-spacing: 5px;
        font-size: var(--size);
    }

    hr {
        color: var(--text);
        height: 0;
        flex-grow: 1;
    }

</style>