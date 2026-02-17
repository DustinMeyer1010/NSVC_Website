<script>
	import ButtonOutlined from "$lib/components/buttons/Button_Outlined.svelte";
	import ButtonSolid from "$lib/components/buttons/Button_Solid.svelte";
	import Nav from "$lib/components/nav/Nav.svelte";
	import TitleSection from "$lib/components/titles/Title_Section.svelte";
	import { toggleTheme } from "$lib/stores/theme";

</script>

<div>

<ButtonOutlined primary={false} height={50} width={300} onclick={toggleTheme} label={"toggle theme"} ></ButtonOutlined>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<TitleSection title={"Equipment"} position={"left"}></TitleSection>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
<ButtonSolid  height={40} width={200} ></ButtonSolid>
</div>


<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
</style>


