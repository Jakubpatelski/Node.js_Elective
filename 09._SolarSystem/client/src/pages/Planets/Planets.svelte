
<script>
    import { onMount } from "svelte";
    // import { BASE_URL } from "../../store/globalsStore.js";

    // Define a reactive variable to hold the planets data
    // let planetsData = [];

    onMount(async () => {
        const response = await fetch("http://localhost:8080/planets", {
            credentials: "include"
        });
        const { data: planets } = await response.json();

        console.log(planets)
        // planetsData = planets;

    });
</script>

<h1>This is for planets</h1>
<!-- <ul>
    {#each planetsData as planet}
      <li>{planet.name}</li>
    {/each}
  </ul> -->


<!-- <h1>This is for planets</h1> -->