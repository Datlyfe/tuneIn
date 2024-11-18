export interface Song {
	id: string;
	title: string;
	artist: {
		name: string;
	};
	preview: string;
	album: {
		cover_medium: string;
		cover_small: string;
	};
}

export interface Playlist {
	data: Song[];
}
