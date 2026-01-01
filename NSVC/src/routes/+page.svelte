<script lang="ts">
    import groupPhoto from "$lib/assets/pictures/Group Photo.png"
</script>



<main>
    <section class="introduction">
        <h1>Welcome to <b>Next Step Pole Vault</b></h1>
        <div class="main-content">
            <img src={groupPhoto} alt="">
            <div class="description">
                <p>
                    Here you find all things realted to <b>Pole Vault</b>.
                    We are currently located in <b>Rochester NY</b>.
                    Our objective to give all kids a opportunity to reach high heights. 
                    Providing the resources needed such as <b>poles, drills & coaching</b>.
                    We beileve an athlete should never be held back by not having proper equipment or coaching.
                </p>
                <p>
                    At NSVC we train in <b>small group sessions</b>, emphasing safety & technique.
                    Taking the time to break down each aspect of the vault with the athlete.
                </p>
                <p>
                    We accept athelets of all levels. 
                    From athlete that have never touched a pole.
                    To athelte that have been jumping for over a decade.
                </p>
                <p>
                    
                </p>
            </div>


        </div>
        <a href="/sign-up">SIGN UP HERE</a>
    </section>



</main>
<style>

    b {
        font-weight: bold;
        color: var(--primary-color);
    }
    img {
         border-radius: 20px;
         height: 50%;
        }


    main {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    section.introduction {
        display: flex;
        flex-direction: column;
        background: var(--surface-color);
        font-size: 18px;
        padding: 2rem;
        gap: 3rem;
        margin-top: 1rem;
        border-radius: 15px;
        width: 75%;
    }

    h1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        gap: 20px;
    }

    div.main-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }

    a {
        background: var(--primary-color);
        padding: 1rem;
        margin: auto;
        align-self: center;
        text-align: center;
        text-decoration: none;
        color: var(--text-color);
        font-weight: bold;
        border-radius: 10px;
        padding: 1rem 3rem;
    }

</style>