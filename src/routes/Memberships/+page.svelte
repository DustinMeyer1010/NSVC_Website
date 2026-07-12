<main>
    <h1>MEMBERSHIPS</h1>

    <section id="memberships">
        <div id="two-week">
            <h1>Silver</h1>
            <span>$214<sup>\mo</sup></span>
            <ul>
                <li>Two sessions a week</li>
                <li>Video Recording of Session</li>
            </ul>
        </div>
        <div id="unlimited">
            <h1>Gold</h1>
            <span>Cost</span>
            <ul>
                <li>Unlimited sessions a week</li>
                <li>Video Recording of Session</li>
            </ul>
        </div>
        <div id="one-week">
            <h1>Bronze</h1>
            <span>Cost</span>
            <ul>
                <li>One sessions a week</li>
                <li>Video Recording of Session</li>
            </ul>
        </div>
    </section>
</main>


<style>
    h1 {
        text-align: center;
    }

    sup {
        margin: 0;
        padding: 0;
    }

    section#memberships {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div {
        background: var(--surface);
        transition: var(--transition-med);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    span { 
        font-size: 30px;
        font-weight: bold;
    }


    div#two-week, div#one-week {
        height: 400px;
        width: 20%;
    }

    div#two-week {
        border-radius: 12px 0 0 12px;
    }
    
    div#one-week {
        border-radius: 0 12px 12px 0
    }

    div#unlimited {
        height: 500px;
        width: 20%;
        border-radius: 12px;
        z-index: 2;
        box-shadow: 0 0 20px 5px rgba(0,0,0, 0.2);
    }

    div:hover {
        transform: scale(1.05);
    }

    li {
        margin-top: 10px
    }

</style>