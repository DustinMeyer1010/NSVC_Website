import { writable } from "svelte/store";

export type Theme = "light" | "dark"

function getInitalTheme(): Theme {
    if (typeof localStorage !== "undefined") {
        const saved = localStorage.getItem("theme") as Theme | null
        if (saved) return saved
    }

    if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    }

    return "dark"
}


export const theme = writable<Theme>(getInitalTheme())

if (typeof window !== "undefined") {
    theme.subscribe(value => {
        document.documentElement.setAttribute("data-theme", value)
        localStorage.setItem("theme", value)
    })
}