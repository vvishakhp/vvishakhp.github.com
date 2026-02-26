import { mount } from 'svelte'
import PrintableLayout from './components/printable/PrintableLayout.svelte'
import data from './data/data.json'
import './printable.css'

const root = document.getElementById('print-root')

if (!root) {
  throw new Error('Missing #print-root container in printable.html')
}

mount(PrintableLayout, {
  target: root,
  props: {
    data,
  },
})
