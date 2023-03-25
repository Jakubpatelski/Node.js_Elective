<script>
  import FavoriteBirds from "./lib/FavoriteBirds.svelte";
  import Greeter from "./lib/Greeter.svelte";
  import Garden from "./lib/Garden.svelte";
    import GardenGate from "./lib/GardenGate.svelte";
</script>

<Greeter/>
<Greeter name={"Jakub"}/>
<Greeter name="Uncle Bob" greeting={"Goodbye"}/>

<!-- <img alt="logo" src="./src/assets/sevelte.svg"> -->
<FavoriteBirds />
<GardenGate />
<Garden />
