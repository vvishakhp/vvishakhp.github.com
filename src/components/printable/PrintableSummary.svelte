<script lang="ts">
  export let summaryPoints: string[]
</script>

<section class="section">
  <h2>Profile Summary</h2>
  <ul>
    {#each summaryPoints as point}
      <li>{point}</li>
    {/each}
  </ul>
</section>
