// store.ts
import { create } from 'zustand';

type ModalType = 'partner' | null;

interface StoreState {
  activeModal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const useStore = create<StoreState>((set) => ({
  activeModal: null,
  openModal: (type) => set({ activeModal: type }),
  closeModal: () => set({ activeModal: null }),
}));

