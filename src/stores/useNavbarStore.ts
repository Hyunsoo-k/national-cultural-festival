import { create } from 'zustand';

import { useBackdropStore } from './useBackdropStore';

type NavbarStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const useNavbarStore = create<NavbarStore>((set) => ({
  isOpen: false,
  open: () => {
    set({ isOpen: true });
    useBackdropStore.setState({ isOpen: true });
  },
  close: () => {
    set({ isOpen: false });
    useBackdropStore.setState({ isOpen: false });
  },
  toggle: () => set((state) => {
    const nextOpen = !state.isOpen;
    useBackdropStore.setState({ isOpen: nextOpen });
    return { isOpen: nextOpen };
  }),
}));