export type AlbumArtist = {
    name: string;
    link?: string;
};

export type AlbumSong = {
    name: string;
    link?: string;
};

export type AlbumSummaryProps = {
    albumName: string;
    art: string;
    link: string;
    artists: AlbumArtist[];
    likedSongs: AlbumSong[];
    about: string;
};
