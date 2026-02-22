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
        padding: 0rem 2rem;
        top: 0px;
        left: 0px;
        position: sticky;
        background: var(--nav);
        color: var(--nav-text);
        width: 100%;
        height: 65px;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 1rem;
        z-index: 100;
    }

    div#links {
        display: flex;
        gap: 2rem;
    }

    a {
        text-decoration: none;
        color: var(--nav-text);
        transition: var(--transition-slow) ;
    } 

    a:visited, a:active {
        color: var(--nav-text);
    }

    a:hover {
        color: var(--action)
    }

</style>