<script>
    import Child from "../../components/Child/Child.svelte";
    import Parent from "../../components/Parent/Parent.svelte";
    import {supermarket} from "../../store/supermarket";
    console.log(supermarket);
    console.log($supermarket);

    const parents = [
        {
            key: 1,
            name: "Adam"
        },
        {
            key: 3,
            name: "Eve"
        }
    ]
    
    function onFamilyMeetingCalled(whoCalled) {
        console.log("Family meeting called by: ", whoCalled);
    }
</script>

<h1>This is the home of the Svelte family.</h1>

<!-- <Parent name="Father"/>
<Parent name="Mother"/> -->
{#each parents as parent (parent.key)}
    <!-- on and handle variable names -->
    <Parent handleFamilyMeetingCall={onFamilyMeetingCalled} name={parent.name}/>
{/each}

<!-- dynamic styling -->
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="black-sheep" name="Cain"/>
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="bright-kid" name="Abel"/>
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} isGirl={true} name="Maria"/>

<h1>This is the online portal for the supermarket</h1>
<p>{$supermarket}</p>
<p>{JSON.stringify($supermarket, null, 3)}</p>