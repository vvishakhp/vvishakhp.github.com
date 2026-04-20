<script lang="ts">
  import type { PortfolioData } from '../../types/portfolio'

  export let education: PortfolioData['education']
</script>

<section class="section">
  <h2>Education</h2>
  {#each education as item}
    <article class="time-line-item" style="padding-left: 2rem; padding-bottom: 2rem;">
      <p class="education-degree">
        {item.degree}
        {#if item.notes}
          <span>({item.notes})</span>
        {/if}
      </p>
      <p class="education-school">{item.institution}</p>
      <p class="education-years">{item.yearRange}</p>
    </article>
  {/each}
</section>
