<script lang="ts">
  import type { PortfolioData } from '../types/portfolio'

  export let experience: PortfolioData['experience']
</script>

<section id="experience" class="section-container bg-gray-50">
  <div class="section-inner">
    <div class="flex flex-col items-center gap-4">
      <div class="section-tag">Experience</div>
      <p class="max-w-xl text-center text-lg text-gray-600 md:text-xl">Here is a quick summary of my most recent experiences:</p>
    </div>

    {#each experience as item}
      <article class="app-card mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 md:flex-row md:gap-8">
        <div class="md:w-1/4">
          <p class="text-base font-semibold text-gray-900">{item.company}</p>
        </div>
        <div class="flex flex-col gap-4 md:w-2/4">
          <p class="text-lg font-semibold text-gray-900">{item.title}</p>
          <ul class="flex list-disc flex-col gap-2 pl-4">
            {#each item.bullets as bullet}
              <li class="text-base text-gray-600">{bullet}</li>
            {/each}
          </ul>
        </div>
        <div class="md:w-1/4">
          <p class="text-base text-gray-700 md:text-right">{item.duration}</p>
        </div>
      </article>
    {/each}
  </div>
</section>
