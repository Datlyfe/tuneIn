import mitt from "mitt";
import type { Song } from "./types";

type Events = {
	newCue: Song;
};

export const bus = mitt<Events>();
