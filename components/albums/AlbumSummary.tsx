import Link from 'next/link';
import { AlbumSummaryProps } from './AlbumSummaryTypes';

const AlbumSummary = (
    props: AlbumSummaryProps & {
        sansFont: string;
        onClick: () => void;
        focused?: boolean;
    }
) => {
    const {
        albumName,
        art,
        artists,
        likedSongs,
        about,
        link,
        sansFont,
        onClick,
        focused,
    } = props;

    return (
        <div
            onClick={onClick}
            className={`md:transition drop-shadow-lg ease-in-out !duration-500  ${
                focused ? 'md:-translate-y-5' : 'md:hover:-translate-y-3'
            } flex flex-col m-5 md:m-3 p-5 mb-6 h-auto md:w-1/3 max-w-96 rounded-lg bg-[#1d8888]`}
        >
            <div className={`text-3xl text-center p-3 pt-0 ${sansFont}`}>
                {!!link ? (
                    <Link target='_blank' href={link}>
                        {albumName}
                    </Link>
                ) : (
                    <>{albumName}</>
                )}
            </div>
            <div
                className={`w-full aspect-square bg-cover`}
                style={{ backgroundImage: `url('${art}')` }}
            />
            <div className='text-lg text-left p-3'>
                Artist{artists.length > 1 ? 's' : ''}:{' '}
                {artists.map((v, i) => {
                    const component = !!v.link ? (
                        <Link
                            target='_blank'
                            className='underline'
                            href={v.link}
                        >
                            {v.name}
                        </Link>
                    ) : (
                        <>{v.name}</>
                    );
                    return (
                        <>
                            {component}
                            {i == artists.length - 1 ? '' : ', '}
                        </>
                    );
                })}
            </div>
            <div className='text-lg text-left p-3'>
                Recommendations:{' '}
                {likedSongs.map((v, i) => {
                    const component = !!v.link ? (
                        <Link
                            target='_blank'
                            className='underline'
                            href={v.link}
                        >
                            {v.name}
                        </Link>
                    ) : (
                        <>{v.name}</>
                    );
                    return (
                        <>
                            {component}
                            {i == likedSongs.length - 1 ? '' : ', '}
                        </>
                    );
                })}
            </div>
            <div
                className={`text-lg text-left m-3 overflow-hidden ${
                    focused ? '' : 'line-clamp-1'
                } md:!line-clamp-3`}
            >
                {about}
            </div>
        </div>
    );
};

export default AlbumSummary;
