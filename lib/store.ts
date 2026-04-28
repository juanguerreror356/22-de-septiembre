'use client';

import { create } from 'zustand';
import type { SpecialtySlug } from './data';

interface UiState {
  specialty: SpecialtySlug;
  country: string;
  setSpecialty: (s: SpecialtySlug) => void;
  setCountry: (c: string) => void;
}

export const useUiStore = create<UiState>((set) => ({
  specialty: 'odontologia',
  country: 'CO',
  setSpecialty: (specialty) => set({ specialty }),
  setCountry: (country) => set({ country })
}));
