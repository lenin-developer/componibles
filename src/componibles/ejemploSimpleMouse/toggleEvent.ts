import { type Ref, onMounted, onUnmounted } from 'vue';

export const useToggleEvent = (
  element: Ref<HTMLElement>,
  event: string,
  callback: <T extends Event>(e: T) => void
) => {
  onMounted(() => element.value.addEventListener(event, callback));
  onUnmounted(() => element.value.removeEventListener(event, callback));
};
