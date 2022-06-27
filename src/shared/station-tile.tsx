import Image from "next/image";
import * as url from "url";

const StationTile = (props:{
    isActive?: boolean,
    isActiveBackground?: boolean,
    isMain?: boolean
    text?: string,
    image?: string
}) => {
    const defaultStyle = 'flex shrink-0 m-1.5 text-xs md:text-xl p-2 align-middle w-60px h-60px md:w-90px md:h-90px rounded-11px bg-white shadow-station-tile '
    return (
        <div className={defaultStyle + (props.isMain && 'bg-orange text-white')}>
            {props.text &&
                <div className={'m-auto text-center'}>
                    {props.text}
                </div>
            }
            {props.image &&
                <div className={'m-auto text-center'}>
                    {/*<Image src={props.image} alt={''}/>*/}
                </div>
            }
        </div>
    )
}
export default StationTile