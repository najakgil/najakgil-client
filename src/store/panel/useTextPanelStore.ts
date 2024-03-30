import {create} from 'zustand';

type TextObject = {
    id: string;
    text: string;
    x: number;
    y: number;
    color: string;
    font: string;
    dragging: boolean;
    offsetX: number;
    offsetY: number;
}

type TextPanel = {
    textObjects: TextObject[]; 
    setTextObjects: (objects: TextObject[]) => void;
    inputText: string;
    setInputText: (text: string) => void;
    editText: string;
    setEditText: (text: string) => void;
    selectedTextId: string;
    setSelectedTextId: (id: string) => void;
    textColor: string;
    setTextColor: (color: string) => void;
    textSize: number;
    setTextSize: (size: number) => void;
}

export const useTextPanelStore = create<TextPanel>((set) => ({
    textObjects: [],
    setTextObjects: (objects) => set({ textObjects: objects }),
    inputText: '',
    setInputText: (text) => set({inputText: text}),
    editText: '',
    setEditText: (text) => set({editText: text}),
    selectedTextId: '',
    setSelectedTextId: (id) => set({selectedTextId: id}),
    textColor: '#1E212B',
    setTextColor: (color) => set({textColor: color}),
    textSize: 16,
    setTextSize: (size) => set({textSize: size}),
}));