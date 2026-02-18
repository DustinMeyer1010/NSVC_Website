<script lang="ts">

</script>


<nav>
    <div>
        Icon
    </div>
    <div id="links">
        <a href="/">Home</a>
        <a href="/Memberships">Memberships</a>
        <a href="/Pole-Rentals">Pole Rentals</a>
        <a href="/Contacts">Contact</a>
        <a href="/Coaches">Coaches</a>
    </div>

</nav>


<style>

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0rem 1rem;
        top: 0px;
        left: 0px;
        background: var(--nav);
        color: var(--nav-text);
        width: 100%;
        height: 50px;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    div#links {
        display: flex;
        gap: 2rem;
    }

    a {
        text-decoration: none;
    } 

    a:visited {
        color: var(--nav-text);
    }

</style>