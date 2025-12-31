<script>
    import instagramIcon from "$lib/assets/dark-theme/Instagram-Logo.png"
</script>

<footer>
    {@render resources()}
    {@render socials()}
</footer>

{#snippet resources()}
    <div class="resources">
        <a href="#">Contact</a>
        <a href="#">Coaches</a>
        <a href="#">Memberships</a>
        <a href="#">Blank</a>
        <a href="#">Blank</a>
        <a href="#">Blank</a>
    </div>
{/snippet}

{#snippet socials()}
    <div class="socials">
        <a href="https://www.instagram.com/nextstepvault/" target="_blank">
            <img src={instagramIcon} alt="Next Step Pole Vault Instagram">
        </a>
    </div>
{/snippet}


<style>

    footer {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1rem 3rem;
        box-sizing: border-box;
    }

    
    div.resources {
        display: grid;
        row-gap: 3rem;
        grid-template-columns: 1fr 1fr 1fr; 
        flex-basis: 60%;
        font-size: 15px;
    }

    
    a {
        text-decoration: none;
        color: var(--text-color);
        flex-basis: 33%;
        justify-self: flex-start;
    }

    div.socials {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        flex-basis: 40%;
    }

    img {
        transition: 0.3s ease;
    }

    img:hover {
        transform: scale(1.1) rotate(15deg);
    }

</style>