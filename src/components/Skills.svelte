<script lang="ts">
  import { BadgeCheck } from 'lucide-svelte'
  import type { PortfolioData } from '../types/portfolio'

  export let skills: PortfolioData['skills']
  export let coreSkills: PortfolioData['coreSkills']

  $: professionalSkills = [...coreSkills]
</script>

<section id="skills" class="section-container">
  <div class="section-inner">
    <div class="flex flex-col items-center gap-4">
      <div class="section-tag">Skills</div>
      <p class="max-w-xl text-center text-lg text-gray-600 md:text-xl">The skills, tools and technologies I am really good at:</p>
    </div>

    <div class="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-3 md:grid-cols-4 md:gap-y-8 lg:grid-cols-5">
      {#each skills as skill}
        <div class="group flex flex-col items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-4 text-center transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-md">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition duration-300 group-hover:scale-110">
            <img src={skill.icon} alt={`${skill.name} icon`} class="h-6 w-6 object-contain" loading="lazy" />
          </div>
          <p class="text-sm text-gray-700">{skill.name}</p>
        </div>
      {/each}
    </div>

    <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {#each professionalSkills as item}
        <div class="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-3 py-3">
          <BadgeCheck size={20} color="#10B981" />
          <p class="text-sm text-gray-700">{item}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
