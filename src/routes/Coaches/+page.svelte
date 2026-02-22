<script lang="ts">
	import Coaches from "$lib/components/cards/Coaches.svelte";
	import { CoachInfo } from "$lib/components/namespaces/coaches";



</script>

<main>
    {#each CoachInfo.information as coach}
        <a href={coach.path}>
            <h1>{coach.name}</h1>
            <img src={coach.imgPath} alt={"Coach " + coach.name + " Image"}>
            <div>
                <p>{coach.description}</p>
            </div>
        </a>
    {/each}
</main>

<style>
    main {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);
        max-width: 80%;
        margin: 0 auto;
        gap: 3rem;
    }

    div {
        width: 100%;
    }

    h1 {
        width: 100%;
        padding: 0.7rem 0 ;
        top: 0px;
        background: var(--nav);
        position: sticky;
        text-align: center;
    }

    img {
        width: 60%;
        border-radius: 10px;
    }

    a {
        color: var(--text);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--nav);
        height: 500px;
        min-width: 700px;
        padding: 0 1.5rem 1.5rem 1.5rem;
        border-radius: 14px;
        overflow-y: scroll;
        position: relative;
    }

    a:visited {
        color: var(--text);
    }
</style>