<script lang="ts">
  import { MapPin } from 'lucide-svelte'
  import type { PortfolioData } from '../types/portfolio'

  export let basics: PortfolioData['basics']

  const openPrintableVersion = () => {
    const printWindow = window.open('/printable.html', '_blank')
    if (!printWindow) return

    const triggerPrint = () => {
      printWindow.focus()
      printWindow.print()
      setTimeout(() => {
        printWindow.close()
      }, 250)
    }

    printWindow.addEventListener('load', triggerPrint, { once: true })
  }
</script>

<section
  id="home"
  class="section-container flex min-h-[calc(100vh-73px)] items-center bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.28),transparent_42%),radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(125,211,252,0.28),transparent_50%),linear-gradient(to_bottom,#eff6ff,#dbeafe)]"
>
  <div class="section-inner">
    <div class="flex flex-col gap-12 md:flex-row">
      <div class="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
        <div class="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
          <div class="group absolute z-10 h-[280px] w-[240px] overflow-hidden border-8 border-gray bg-gray-900 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]">
            <img
              src={basics.profileImage}
              alt={`Profile picture of ${basics.name}`}
              class="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <div class="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
        </div>
      </div>

      <div class="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center">
        <div class="flex flex-col gap-2">
          <h1 class="text-4xl font-semibold text-gray-900 md:text-5xl md:font-bold md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px]">
            Hi, I'm {basics.name.split(' ')[0]} <span class="inline-block animate-waving-hand">👋</span>
          </h1>
          <p class="text-base text-gray-600 md:text-lg">{basics.tagline}</p>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <MapPin class="h-5 w-5 stroke-gray-600" />
            <p class="text-base text-gray-600">{basics.location}</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex h-6 w-6 items-center justify-center">
              <span class="relative flex h-3 w-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
            </div>
            <p class="text-base text-gray-600">Available for new opportunities</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <a class="text-gray-600 hover:text-gray-900" href={`mailto:${basics.email}`}>{basics.email}</a>
          <span class="h-4 w-px bg-gray-200"></span>
          <a class="text-gray-600 hover:text-gray-900" href={`tel:${basics.phone.replace(/\s/g, '')}`}>{basics.phone}</a>
        </div>

        <div class="pt-2">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-300/60 transition hover:scale-[1.02] hover:bg-blue-700 md:text-base"
            on:click={openPrintableVersion}
          >
            Printable Version
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
