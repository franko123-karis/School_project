import { writable } from "svelte/store";

export const activePage = writable("home");

export const user = writable({
  username: "JohnDoe",
});
