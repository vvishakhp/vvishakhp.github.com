<script lang="ts">
  import { Menu, X } from "lucide-svelte";
  import { onDestroy, onMount } from "svelte";
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

  let menuOpen = false;

  const closeMenu = () => {
    menuOpen = false;
  };

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  $: if (typeof document !== "undefined") {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }

  onMount(() => {
    document.title = `Portfolio - ${data.basics.name}`;

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeydown);

    const desktopMq = window.matchMedia("(min-width: 768px)");
    const onDesktop = () => {
      if (desktopMq.matches) closeMenu();
    };
    desktopMq.addEventListener("change", onDesktop);

    return () => {
      window.removeEventListener("keydown", onKeydown);
      desktopMq.removeEventListener("change", onDesktop);
    };
  });

  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.body.classList.remove("overflow-hidden");
    }
  });
</script>

<div class="relative">
  <header
    class="sticky top-0 z-40 w-full border-b border-transparent bg-gray max-md:border-gray-100"
  >
    <nav
      class="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-4 py-4 md:px-8"
      aria-label="Primary"
    >
      <a
        href="#home"
        class="text-lg font-bold tracking-tight text-gray-900"
        on:click={closeMenu}>{"<VP />"}</a
      >
      <button
        type="button"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 md:hidden"
        aria-expanded={menuOpen}
        aria-controls="site-mobile-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        on:click={toggleMenu}
      >
        {#if menuOpen}
          <X class="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        {:else}
          <Menu class="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        {/if}
      </button>
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

  {#if menuOpen}
    <div
      class="fixed inset-x-0 bottom-0 top-[73px] z-30 md:hidden"
      role="presentation"
    >
      <button
        type="button"
        class="absolute inset-0 cursor-default bg-gray-900/40"
        aria-label="Close menu"
        tabindex="-1"
        on:click={closeMenu}
      ></button>
      <nav
        id="site-mobile-nav"
        class="relative mx-auto max-w-content border-b border-gray-100 bg-gray px-4 py-4 shadow-lg md:px-8"
        aria-label="Mobile sections"
      >
        <ul class="m-0 flex list-none flex-col gap-1 p-0">
          {#each navItems as item}
            <li>
              <a
                class="block rounded-lg px-3 py-3 text-base font-medium text-gray-800 transition hover:bg-gray-100"
                href={item.href}
                on:click={closeMenu}>{item.label}</a
              >
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  {/if}

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
      <p class="px-2 text-center text-sm text-gray-600 break-words">
        © {new Date().getFullYear()} | Designed and coded with care by {data
          .basics.name}
      </p>
    </div>
  </footer>
</div>
