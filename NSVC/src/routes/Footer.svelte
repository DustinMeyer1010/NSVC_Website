<script>
    import instagramIcon from "$lib/assets/dark-theme/Instagram-Logo.png"
    import facebookIcon from "$lib/assets/dark-theme/Facebook-Logo.png"
</script>

<footer>
    {@render resources()}
    {@render socials()}
</footer>

{#snippet resources()}
    <div class="resources">
        <a href="/contact">Contact</a>
        <a href="/coaches">Coaches</a>
        <a href="/memberships">Memberships</a>
        <a href="/facuility">Facuility</a>
        <a href="/sign-up">Sign Up</a>
        <a href="/pole-rentals">Pole Rentals</a>
    </div>
{/snippet}

{#snippet socials()}
    <div class="socials">
        <a href="https://www.instagram.com/nextstepvault/" target="_blank">
            <img src={instagramIcon} alt="Next Step Pole Vault Instagram" title="NSVC Instagram">
        </a>
        <a href="https://www.facebook.com/p/NextStep-Vault-Club-100064048302860/" target="_blank">
            <img src={facebookIcon} alt="Next Step Pole Vault Facebook" title="NSVC Facebook">
        </a>
    </div>
{/snippet}


<style>

    footer {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 2rem 3rem;
        box-sizing: border-box;
        background-color: var(--surface-color);
        margin-top: 3rem;
    }

    
    div.resources {
        display: grid;
        row-gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr; 
        flex-basis: 60%;
        font-size: 15px;
    }

    
    a {
        font-weight: bold;
        font-size: 18px;
        text-decoration: none;
        color: var(--text-color);
        justify-self: flex-start;
    }

    a:hover {
        color: var(--primary-color);
    }

    div.socials {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        flex-basis: 40%;
    }

    img {
        width: 30px;
        transition: 0.3s ease;
    }

    img:hover {
        transform: scale(1.1) rotate(15deg);
    }

</style>