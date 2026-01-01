<script lang="ts">
    import location from "$lib/assets/pictures/Map_Location.png"

</script>



<main>
    <h1>New Facuility</h1>
    <p>Our Facuilty is located in Eqypt, Fairport. 400 Mason Rd, Fairport, NY 14450 </p>
    <a href={`https://www.google.com/maps/place/400+Mason+Rd,+Fairport,+NY+14450/@43.0662877,-77.4100136,17z/data=!3m1!4b1!4m10!1m2!2m1!1s400+mason+rd+egypt!3m6!1s0x89d132ed96cfd30b:0xa71753c343ed2211!8m2!3d43.0662878!4d-77.4051481!15sChI0MDAgbWFzb24gcmQgZWd5cHSSARFjb21wb3VuZF9idWlsZGluZ-ABAA!16s%2Fg%2F11c5nlsgkc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`} target="_blank">
        <img src={location} alt="">
    </a>
</main>



<style>

    a {
        width: 40%;
    }

    img {
        width: 100%;
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-grow: 1;
    }

</style>