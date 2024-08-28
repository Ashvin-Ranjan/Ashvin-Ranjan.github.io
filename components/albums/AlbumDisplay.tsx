import Link from 'next/link';
import { AlbumSummaryProps } from './AlbumSummaryTypes';

const AlbumDisplay = (props: AlbumSummaryProps & { sansFont: string }) => {
    const { albumName, art, artists, likedSongs, about, link, sansFont } =
        props;

    return (
        <div className='flex flex-col p-7 h-full w-full bg-[#1d8888]'>
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
                Recommandations:{' '}
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
            <div className='text-lg text-left m-3 overflow-auto'>{about}</div>
        </div>
    );
};

export default AlbumDisplay;
