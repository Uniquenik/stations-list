import Burger from './images/burger.svg'
import Search from './images/search.svg'
import Close from './images/close.png'
import Image from "next/image";
import {useState} from "react";

const Header = () => {
    const [isSearch, setIsSearch] = useState(true)


    return(
        <>
            <header className={"z-30 h-50px flex sticky top-0 w-full px-5"}>
                <div className={"py-15px"} >
                    <Image src={Burger} alt={'B'}/>
                </div>
                <div className={'grow'}>

                </div>
                {
                    isSearch &&
                    <div className={"py-15px flex gap-3"}>
                        <input className={'w-56 border-lightgray border-b-2 focus:border-0'}/>
                        <Image onClick={() => setIsSearch(false)} src={Close} alt={'B'}/>
                    </div>
                    ||
                    <div className={"my-15px"}>
                        <Image onClick={() => setIsSearch(true)} src={Search} alt={'B'}/>
                    </div>
                }
            </header>
            <div className={'h-3.75 bg-lightgray'}>
                <div className={'text-[8px]'}>
                    <div className="relative overflow-x-hidden">
                        <div className="animate-marquee">
                            <div className={'flex'}>
                                <div className={'grow'}></div>
                                <div>Текст</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;