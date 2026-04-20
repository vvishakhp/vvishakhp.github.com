<script lang="ts">
  import { Copy, Mail, Phone } from 'lucide-svelte'
  import type { PortfolioData } from '../types/portfolio'

  export let basics: PortfolioData['basics']
  export let personalInfo: PortfolioData['personalInfo']
  export let socialLinks: PortfolioData['socialLinks']

  let copiedValue: 'email' | 'phone' | null = null

  const copyValue = async (value: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value)
      copiedValue = type
      setTimeout(() => {
        copiedValue = null
      }, 1200)
    } catch {
      copiedValue = null
    }
  }
</script>

<section id="contact" class="section-container">
  <div class="section-inner">
    <div class="flex flex-col items-center gap-4">
      <div class="section-tag">Get in touch</div>
      <p class="max-w-xl text-center text-lg text-gray-600 md:text-xl">
        What's next? Feel free to reach out if you are looking for a developer, have a query, or simply want to connect.
      </p>
    </div>

    <div class="flex flex-col items-center gap-6 md:gap-12">
      <div class="flex flex-col items-center md:gap-4">
        <div class="flex items-center gap-3 md:gap-5">
          <Mail class="h-6 w-6 text-gray-900 md:h-8 md:w-8" />
          <a href={`mailto:${basics.email}`} class="text-base font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">{basics.email}</a>
          <button
            type="button"
            class="relative rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
            aria-label="Copy email"
            on:click={() => copyValue(basics.email, 'email')}
          >
            <Copy class="h-5 w-5" />
            {#if copiedValue === 'email'}
              <span class="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs text-gray">Copied!</span>
            {/if}
          </button>
        </div>
        <div class="flex items-center gap-3 md:gap-5">
          <Phone class="h-6 w-6 text-gray-900 md:h-8 md:w-8" />
          <a href="tel:${basics.phone.replace(/\s/g, '')}" class="text-base font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">{basics.phone}</a>
          <button
            type="button"
            class="relative rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
            aria-label="Copy phone"
            on:click={() => copyValue(basics.phone.replace(/\s/g, ''), 'phone')}
          >
            <Copy class="h-5 w-5" />
            {#if copiedValue === 'phone'}
              <span class="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs text-gray">Copied!</span>
            {/if}
          </button>
        </div>
      </div>

      <div class="flex flex-col items-center gap-2">
        <p class="text-center text-base text-gray-600">You may also find me on these platforms!</p>
        <div class="flex flex-wrap justify-center gap-2">
          {#each socialLinks as link}
            <a
              href={link.url}
              class="group inline-flex h-[34px] min-w-[148px] items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-100"
              target={link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? undefined : 'noreferrer'}
              title={link.label}
            >
              <img src={link.icon} alt={`${link.platform} icon`} class="h-4 w-4 object-contain transition group-hover:scale-110" loading="lazy" />
              {link.platform}
            </a>
          {/each}
        </div>
        <p class="text-sm text-gray-500">DOB: {personalInfo.dob} | Languages: {personalInfo.languages.join(', ')}</p>
      </div>
    </div>
  </div>
</section>
