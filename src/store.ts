import { defineStore } from "pinia";
import type { Song } from "./types";

export const useStore = defineStore("store", {
	state: () => {
		return {
			currentView: "discover",
			likes: JSON.parse(localStorage.getItem("likes") ?? "[]") as Song[],
		};
	},

	actions: {
		setCurrentView(view: string) {
			this.currentView = view;
		},
		likeSong(song: Song) {
			this.likes.push(song);
			localStorage.setItem("likes", JSON.stringify(this.likes));
		},
		unlike(song: Song) {
			this.likes = this.likes.filter((tune) => tune.id !== song.id);
			localStorage.setItem("likes", JSON.stringify(this.likes));
		},
	},
});
