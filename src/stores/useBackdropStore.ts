import { create } from 'zustand';

import { useNavbarStore } from './useNavbarStore';

type BackdropStroe = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useBackdropStore = create<BackdropStroe>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => {
    useNavbarStore.setState({ isOpen: false });
    set({ isOpen: false });
  }
}));