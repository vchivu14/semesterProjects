<script>
    export let name;
    export let handleFamilyMeetingCall;

    // function literal
    console.log(handleFamilyMeetingCall);
</script>

<h2 class="parent" on:click|preventDefault={handleFamilyMeetingCall(name)}>Hi! I am a Svelte parent and I am {name}. </h2>
<!-- <button on:click={handleFamilyMeetingCall}>Call Family</button> -->

<style>
    .parent {
        user-select: none;
    }
</style>
