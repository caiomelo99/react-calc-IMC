import { Level } from "@/types/typeLevel"
import upImage from '@/assets/up.png'
import downImage from '@/assets/down.png'

type Props = {
    item: Level
}
export const Item = ({item}: Props) => {

    return (
        <div style={{backgroundColor: item.color}} className={`flex-1 text-white flex justify-center items-center flex-col p-[20px] rounded-md`}>
            <div className="w-[70px] h-[70px] bg-black/20 rounded-full flex justify-center items-center">
                <img src={item.icon === 'up' ? upImage.src : downImage.src} alt="icon" className="w-[30px]"/>
            </div>
            <div className="text-[23px] font-bold mt-[5px]">{item.title}</div>
            {item.yourImc && 
                <div className="text-[17px] mt-[10px] mb-[50px] font-bold">Seu IMC é de {item.yourImc} kg/m2</div>
            }
            <div className="text-[12px] mt-[14px]">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}