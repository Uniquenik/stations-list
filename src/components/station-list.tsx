import StationTile from "../shared/station-tile";
import useSWR from "../../node_modules/swr/dist/index";
import {AppService} from "../service";

const StationList = () => {
    const {data: genres} = useSWR('genres', AppService.getGenres)
    const {data: countries} = useSWR('countries', AppService.getCountries)
    const {data: stations} = useSWR('stations', AppService.getStations)

    return (
        <>
            <div className={'flex flex-nowrap overflow-x-hidden'}>
                <StationTile isMain={true} text={'My Best'}/>
                <div className={'flex flex-nowrap'}>
                    {
                        genres && genres.map((el, index) => {
                            return (
                                <StationTile
                                    key={index}
                                    text={el}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'flex flex-col gap-0'}>
                {
                    countries && countries.map((el, index) => {
                        return(
                            <StationTile
                                key={index}
                                text={el.title}/>
                        )
                    })
                }
            </div>
            <div className={'flex'}>
                {
                    stations && stations.map((el, index) => {
                        return(
                            <StationTile
                                key={index}
                                image={el.favicon}/>
                        )
                    })
                }
            </div>
        </>
    );
}

export default StationList