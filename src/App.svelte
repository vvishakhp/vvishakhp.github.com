<script lang="ts">
  import { onMount } from "svelte";
  import About from "./components/About.svelte";
  import Contact from "./components/Contact.svelte";
  import ExperienceTimeline from "./components/ExperienceTimeline.svelte";
  import Hero from "./components/Hero.svelte";
  import Skills from "./components/Skills.svelte";
  import { loadPortfolioData } from "./lib/loadPortfolioData";

  const data = loadPortfolioData();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  onMount(() => {
    document.title = `Portfolio - ${data.basics.name}`;
  });
</script>

<div class="relative">
  <header
    class="sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100"
  >
    <nav
      class="mx-auto flex w-full max-w-content items-center justify-between px-4 py-4 md:px-8"
    >
      <a href="#home" class="text-lg font-bold tracking-tight text-gray-900"
        >{"<VP />"}</a
      >
      <ul class="hidden list-none items-center gap-6 md:flex">
        {#each navItems as item}
          <li>
            <a
              class="text-sm text-gray-600 transition hover:text-gray-900"
              href={item.href}>{item.label}</a
            >
          </li>
        {/each}
      </ul>
    </nav>
  </header>

  <main>
    <Hero basics={data.basics} />
    <About about={data.about} basics={data.basics} />
    <Skills skills={data.skills} coreSkills={data.coreSkills} />
    <ExperienceTimeline experience={data.experience} />
    <Contact
      basics={data.basics}
      personalInfo={data.personalInfo}
      socialLinks={data.socialLinks}
    />
  </main>

  <footer class="w-full bg-gray-50 py-6">
    <div
      class="mx-auto flex w-full max-w-content items-center justify-center px-4 md:px-8"
    >
      <p class="text-sm text-gray-600">
        © {new Date().getFullYear()} | Designed and coded with care by {data
          .basics.name}
      </p>
    </div>
  </footer>
</div>
