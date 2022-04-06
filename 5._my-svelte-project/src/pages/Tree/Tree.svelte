<script>
    import Apple from "./Apple.svelte";

    // const apples = ["red", "green"];
    let apples = ["🍏", "🍎", "🍏", "🍎", "🍎", "🍏"];

    function pickApple() {
        apples.pop();
        apples = apples;
    }
</script>

<div id="tree">
    <h2>I'm a tree</h2>

    {#each apples as apple}
        <Apple apple={apple}/>
    {/each}

    <button on:click={pickApple}>Pick an apple</button>
</div>

<div id="trunk"></div>


<style>
    #tree {
        background-color: lightgreen;
    }

    #trunk {
        height: 200px;
        width: 50px;
        background-color: burlywood;
    }
</style>

<!-- <Apple apple={"This apple is: " + apples[0]}/>
<button on:click={() => {
    console.log("picked");
}}>Pick an Apple</button> -->

<!-- <Apple apple={"This apple is: " + apples[0]}/>
<button on:click={pickApple}>Pick an Apple</button> -->