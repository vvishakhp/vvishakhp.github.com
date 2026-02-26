<script lang="ts">
  import type { PortfolioData } from '../../types/portfolio'
  import PrintableBottomSkills from './PrintableBottomSkills.svelte'
  import PrintableEducation from './PrintableEducation.svelte'
  import PrintableExperience from './PrintableExperience.svelte'
  import PrintableSidebar from './PrintableSidebar.svelte'
  import PrintableSummary from './PrintableSummary.svelte'
  import PrintableTools from './PrintableTools.svelte'

  export let data: PortfolioData

  $: summaryPoints = [
    `${data.basics.yearsOfExperience} of professional software engineering experience.`,
    ...data.about.paragraphs.slice(0, 3),
  ]

  $: technicalGroups = [
    [...data.technicalSkills.backend].join(' / '),
    [...data.technicalSkills.databases].join(' / '),
    [...data.technicalSkills.frontend].join(' / '),
    [...data.technicalSkills.devops].join(' / '),
  ]

  $: aboutText = data.about.paragraphs[0] ?? ''
  $: toolSkills = data.skills.slice(0, 12)
</script>

<section class="resume">
  <section class="top-layout">
    <PrintableSidebar basics={data.basics} aboutText={aboutText} technicalGroups={technicalGroups} personalInfo={data.personalInfo} />

    <section class="right-main">
      <PrintableSummary summaryPoints={summaryPoints} />
      <PrintableExperience experience={data.experience} />
    </section>
  </section>

  <section class="bottom-layout">
    <PrintableBottomSkills coreSkills={data.coreSkills} />
    <PrintableEducation education={data.education} />
    <PrintableTools skills={toolSkills} />
  </section>
</section>
