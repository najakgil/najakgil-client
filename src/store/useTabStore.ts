import { create } from 'zustand';

// 탭 상태 관리
type Tab = {
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
};

export const useTabStore = create<Tab>((set) => ({
  activeTab: 1,
  setActiveTab: (activeTab) => set({ activeTab }),
}));
