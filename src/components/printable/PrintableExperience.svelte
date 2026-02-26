<script lang="ts">
  import type { PortfolioData } from '../../types/portfolio'

  export let experience: PortfolioData['experience']
</script>

<section class="section">
  <h2>Experience</h2>
  {#each experience as item}
    <article class="time-line-item">
      <div class="experience-head">
        <p class="experience-title">{item.company}</p>
        <p class="experience-company">{item.duration}</p>
      </div>
      <p class="experience-role">{item.title}</p>
      <ul>
        {#each item.bullets as bullet}
          <li>{bullet}</li>
        {/each}
      </ul>
    </article>
  {/each}
</section>
