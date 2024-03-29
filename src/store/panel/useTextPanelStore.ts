import {create} from 'zustand';

type TextPanel = {
    textColor: string;
    setTextColor: (color: string) => void;
    textSize: number;
    setTextSize: (size: number) => void;
}

export const useTextPanelStore = create<TextPanel>((set) => ({
    textColor: 'black',
    setTextColor: (color) => set({textColor: color}),
    textSize: 16,
    setTextSize: (size) => set({textSize: size}),
}));