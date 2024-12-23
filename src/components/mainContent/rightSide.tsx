'use client'

import {levels, calculateImc} from '@/components/helpers/imc'
import { Item } from '../gridItem/item'
import { useImc } from '../context/imcContext'
import leftArrowImage from '@/assets/leftarrow.png'

export const RightSide = () => {

    const {toShow, setToShow, setHightField, setWeightField} = useImc()
    
    const handleBackButton = () => {
        setToShow(null)
        setHightField(0)
        setWeightField(0)
    }

    return(
        <div className="flex-1 flex"> {/*RightSide*/}
        {!toShow &&
        <div className='flex-1 grid grid-cols-1 gap-[20px] sm:grid-cols-2'>
            {levels.map((item, key) => (
                <Item key={key} item={item}/>
            ))}
        </div>
        }{toShow && 
            <div className="flex flex-1">
                <div className="cursor-pointer absolute bg-[#227C9D] w-[70px] h-[70px] flex justify-center items-center rounded-md md:ml-[-35px] md:mt-[145px] md:rounded-full hover:bg-[#1a6681] transition-all duration-200" onClick={handleBackButton}>
                    <img src={leftArrowImage.src} alt="seta esquerda" className="w-[25px]"/>
                </div>
                <Item item={toShow}/>
            </div>
        }
    </div>
    )
}