<script lang="ts">
  import type { PortfolioData } from '../types/portfolio'

  export let education: PortfolioData['education']
</script>

<section id="education" class="section-shell">
  <h2 class="section-title">Education</h2>
  <p class="section-subtitle">Academic history and foundational training.</p>

  <div class="grid gap-5 md:grid-cols-3">
    {#each education as item}
      <article class="card">
        <p class="text-xs uppercase tracking-wide text-muted">{item.yearRange}</p>
        <h3 class="mt-2 text-lg font-semibold">{item.degree}</h3>
        <p class="mt-2 text-sm text-white/85">{item.institution}</p>
        {#if item.notes}
          <p class="mt-2 text-sm text-muted">{item.notes}</p>
        {/if}
      </article>
    {/each}
  </div>
</section>
