<script lang="ts">
  import { onMount } from 'svelte'
  let dateTime = '';

const fetchTimZone = async () => {
  try {
    const response = await fetch(`http://worldtimeapi.org/api/timezone/Asia/Tokyo`);
    if (!response.ok) {
      throw new Error(`Failed to fetch timezone data.`)
    }
    const data = await response.json();
    dateTime = data.datetime;
  } catch (err) {
    console.error(err)
  }
}

// コンポーネントマウント時、WorldTimeAPIをfetch
onMount(() => {
  fetchTimZone()
})
</script>

<h1>Current Time in Tokyo <br> {dateTime}</h1>

<style lang="scss">
  .heading {
    font-size: 24px;
    color: red;
    margin-bottom: 36px;
  }
</style>

