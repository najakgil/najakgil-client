import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage",
  storage: localStorage,
})

export const PreviewCardAtom = atom({
  key: "previewCardState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
