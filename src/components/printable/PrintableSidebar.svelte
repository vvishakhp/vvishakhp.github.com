<script lang="ts">
  import type { PortfolioData } from '../../types/portfolio'
    import PrintableBottomSkills from './PrintableBottomSkills.svelte';

  export let basics: PortfolioData['basics']
  export let aboutText: string
  export let technicalGroups: string[]
  export let personalInfo: PortfolioData['personalInfo']
  export let coreSkills: string[];

  const contactItems = [
    { icon: '☎', value: basics.phone },
    { icon: '@', value: basics.email },
    { icon: '⌂', value: basics.location },
  ]
</script>

<aside class="left-sidebar">
  <div class="profile-block">
    <img class="profile-image" src={basics.profileImage} alt={`Profile picture of ${basics.name}`} />
    <h1 class="name">{basics.name.toUpperCase()}</h1>
    <p class="role">{basics.role.toUpperCase()}</p>
  </div>

  <section class="left-section">
    <h2>Contact</h2>
    <ul class="left-list left-list-contact">
      {#each contactItems as item}
        <li><span>{item.icon}</span><span>{item.value}</span></li>
      {/each}
    </ul>
  </section>

  <section class="left-section">
    <h2>About Me</h2>
    <p class="left-paragraph">{aboutText}</p>
  </section>

  <section class="left-section">
    <h2>Technical Skills</h2>
    <ul class="left-list">
      {#each technicalGroups as item}
        <li>{item}</li>
      {/each}
    </ul>
  </section>

  <section class="left-section">
    <h2>Personal Info</h2>
    <ul class="left-list">
      <li>DOB - {personalInfo.dob}</li>
      <li>Languages: {personalInfo.languages.join(', ')}</li>
    </ul>
  </section>

  <section class="left-section">
    <h2>Skills</h2>
    <ul class="left-list">
      {#each coreSkills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </section>
</aside>
