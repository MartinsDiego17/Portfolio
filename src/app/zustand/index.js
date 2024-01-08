import { create } from "zustand";

export const useStoreTheme = create((set) => ({
    theme: "dark",
    changeTheme: () => {
        set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light',
            }));
    },
}));
