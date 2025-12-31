<nav>
    <img src="" alt=""/>
    <div>
        <a href="/">Home</a>
        <a href="/coaches">Coaches</a>
        <a href="/pole-rentals">Pole Rentals</a>
        <a href="/memberships">Memberships</a>
    </div>

</nav>

<style>
    nav {
        position: sticky;
        top:0;
        left: 0;
        box-sizing: border-box;
        height: 64px;
        padding: 1rem;
        width: 80%;
        border-radius: 0 0 5px 5px;

        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;


        background: var(--background-color-ligther);
    }

    div {
        flex-basis: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    a {
        text-decoration: none;
        letter-spacing: 1px;
        font-weight: bold;
        font-size: 18px;
        color: var(--text-color);
    }
</style>