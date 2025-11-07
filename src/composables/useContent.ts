import { ref, readonly, computed } from 'vue';
import type { SiteContent } from '../types/content';
import contentData from '../data/content.json';

const content = ref<SiteContent>(contentData as SiteContent);

export function useContent() {
  return {
    content: readonly(content),
    global: computed(() => content.value.global),
    components: computed(() => content.value.components)
  };
}

// Helper function to get content for a specific component
export function useComponentContent<T extends keyof SiteContent['components']>(
  componentName: T
) {
  return {
    content: computed(() => content.value.components[componentName]),
    global: computed(() => content.value.global)
  };
}
