<script lang="ts">
  import type { PortfolioData } from '../../types/portfolio'

  export let skills: PortfolioData['skills']
</script>

<section class="section">
  <h2>Tools / Technologies</h2>
  <div class="tools-grid">
    {#each skills as skill}
    <div class="skill-item">
      <img src={skill.icon} alt={`${skill.name} icon`} title={skill.name} />
      <span>{skill.name}</span>
    </div>
    {/each}
  </div>
</section>
