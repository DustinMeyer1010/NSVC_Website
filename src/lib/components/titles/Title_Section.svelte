<script lang="ts">


    type tPosition = "center" | "left" | "right"

    let {
        title,
        size = 50,
        position = "center",
    } : {
        title: string,
        size?: number,
        position?: tPosition,
    } = $props()

    let leftLineStyle = $derived.by(() => {
        if (position != "left") {
            return ""
        }

        return "flex-grow: 0; flex-basis: 10%"
    })

    let rightLineStyle = $derived.by(() => {
        if (position != "right") {
            return ""
        }

        return "flex-grow: 0; flex-basis: 10%"
    })

</script>


<div>
    <hr style={leftLineStyle}>
    <h1 style="--size: {size}px">{title.toUpperCase()}</h1>
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