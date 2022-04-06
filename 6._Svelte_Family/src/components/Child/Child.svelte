<script>
    export let name;
    export let isGirl = false;
    // console.log(isGirl);
    export let stereotype = "";
    export let handleFamilyMeetingCall;
    import {supermarket} from "../../store/supermarket";

    function eatCandy() {
        console.log("yum");
        supermarket.update(storeValue => {
            console.log(storeValue);
            if (storeValue.candy > 0) storeValue.candy -= 1;
            return storeValue;
        });
        // indexed access
        // $supermarket.candy--;
    }
</script>

<!-- dynamic styling -->
<div class:girly={isGirl} 
     class={stereotype || "beyond-any-stereotype"}>
<!-- <div class:girly={isGirl} class:boyish={!isGirl}> -->
    <h3 on:click={handleFamilyMeetingCall(name)}>Hi! I am {name}</h3>
</div>

<div>Pieces of candy in the store: {$supermarket.candy}</div>
<button on:click={eatCandy}>Eat candy</button>


<style>
    .girly {
        background-color: blueviolet;
    }
    .black-sheep {
        background-color: black;
        color: white;
    }
    .bright-kid {
        background-color: greenyellow;
    }
</style>