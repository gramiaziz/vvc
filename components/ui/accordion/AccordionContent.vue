<script setup lang="ts">
import { cn } from '@/lib/utils'
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="nooverflow-hidden notext-sm notransition-all data-[state=closed]:noanimate-accordion-up data-[state=open]:noanimate-accordion-down"
  >
    <div :class="cn('nopb-4 nopt-0', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
