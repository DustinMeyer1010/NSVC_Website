<script lang="ts">

    let {   
        label = "button",
        allCaps = true,
        height,
        width,
        primary = true,
        onclick,
    } : { 
        label?: string,
        allCaps?: boolean,
        height: number,
        width: number,
        primary?: boolean,
        onclick?: () => void,
    } = $props()

    let updated_label = $derived.by(() => allCaps ? label.toUpperCase() : label)

    let style = $derived(`
    height: ${height}px;
    width: ${width}px;
    --color: ${primary ? "var(--action)" : "var(--neutral)"};
    `)
</script>


<button {onclick} style={style} >{updated_label}</button>

<style>

    button {
        outline: 3px solid var(--color);
        border: 1px solid var(--color);
        background: var(--color);
        color: var(--background);
        border-radius: 10px;
        font-size: 18px;
        box-sizing: border-box;
        font-weight: bold;
        box-sizing: border-box;
        transition: 0.3s ease;
    }

    button:hover {

        background: transparent;
        color: var(--color);
    }

</style>