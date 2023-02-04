import { atom } from "recoil";
import { removeItem, setItem, getItem } from "../util/AsyncStorageUtils";
import { v1 } from "uuid";

const asyncStorageEffect =
  (key) =>
  async ({ setSelf, onSet }) => {
    const savedValue = await getItem(key);

    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      console.log("onSet", newValue);
      isReset ? removeItem(key) : setItem(key, JSON.stringify(newValue));
    });
  };

export const atomLinkList = atom({
  key: `"MAIN/LINK_LIST" ${v1()}`,
  default: {
    list: [],
  },
  effects: [asyncStorageEffect("MAIN/LINK_LIST")],
});
