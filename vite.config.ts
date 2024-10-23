import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            react({
                //@ts-expect-error - Babel is a valid option
                babel: {
                    plugins: ["react-compiler-runtime/babel-plugin"],
                },
            }),
        ],
    };
});
