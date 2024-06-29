import { type Ref, ref } from 'vue';
import { useToggleEvent } from './toggleEvent.ts';

export const useMouse = (element: Ref<HTMLElement>) => {
  const x: Ref<number> = ref(0);
  const y: Ref<number> = ref(0);

  useToggleEvent(element, 'mousemove', (event: MouseEventInit): void => {
    x.value = (event as MouseEvent)?.pageX;
    y.value = (event as MouseEvent)?.pageY;
  });

  return { x, y };
};
