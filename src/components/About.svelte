<script lang="ts">
  import type { PortfolioData } from '../types/portfolio'

  export let about: PortfolioData['about']
  export let basics: PortfolioData['basics']
</script>

<section id="about" class="section-container bg-gray-50 flex min-h-screen items-center">
  <div class="section-inner">
    <div class="section-tag">About me</div>

    <div class="flex w-full flex-col justify-between gap-12 md:flex-row">
      <div class="flex justify-center md:order-first md:justify-end">
        <div class="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px]">
          <div class="group absolute z-10 h-[360px] w-[280px] overflow-hidden border-8 border-gray-50 bg-gray-900 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px]">
            <img
              src={basics.fullSizeImage}
              alt={`Full size portrait of ${basics.name}`}
              class="h-full w-full object-cover saturate-0 transition duration-500 ease-out group-hover:scale-105 group-hover:saturate-100"
            />
          </div>
          <div class="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px]"></div>
        </div>
      </div>

      <div class="flex max-w-xl flex-col gap-6">
        <h3 class="text-2xl font-semibold tracking-[-0.02em] text-gray-900 md:text-3xl">Curious about me? Here you have it:</h3>
        {#each about.paragraphs as paragraph}
          <p class="text-base text-gray-600">{paragraph}</p>
        {/each}
      </div>
    </div>
  </div>
</section>
