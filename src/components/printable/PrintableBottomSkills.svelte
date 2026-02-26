<script lang="ts">
  export let coreSkills: string[]
</script>

<section class="bottom-section">
  <h2>Skills</h2>
  <ul>
    {#each coreSkills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>
