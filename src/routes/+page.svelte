<script lang="ts">
    import TitleSection from "$lib/components/titles/Title_Section.svelte";
    import ButtonOutlined from "$lib/components/buttons/Button_Outlined.svelte";
</script>

<main>
    <section id="introduction">
        <div id="title">
            <div>
                <span>Welcome to</span>
                <h1>Next Step Vault Club</h1>
                <span>The Launchpad for Rochester's Best.</span>
            </div>
            <div id="socials"></div>
            <ButtonOutlined height={50} width={300} label={"SIGN UP HERE"}></ButtonOutlined>
        </div>
        <div id="image">

        </div>
    </section>
    <section>
        <TitleSection>PERSONALIZED COACHING</TitleSection>
        
    </section>
    <section>
        <TitleSection position={"left"}>EQUIPMENT</TitleSection>
    </section>
</main>


<style> 

    main {
        padding: 1rem 1rem;
        color: var(--text);
    }



    div#image {
        width: 500px;
        height: 700px;
        background: var(--nav);
    }

    section {
        width: 100%;
        margin-bottom: 10%;
    }

    section#introduction {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
        gap: 2rem;
    }

    section#introduction div#title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }

    section#introduction h1 {
        padding: 0;
        margin: 0;
        color: var(--action);
        font-size: 60px;
    }

    section#introduction span {
        align-self: flex-start;
        font-size: 20px;
    }

    section#introduction div#socials {
        width: 700px;
        height: 50px;
        background: var(--nav);
    }

</style>
