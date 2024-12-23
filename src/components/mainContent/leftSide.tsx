'use client'

import { calculateImc} from '@/components/helpers/imc'
import { useImc } from "../context/imcContext"
import { RightSide } from './rightSide'

export const LeftSide = () => {

    const { hightField, setHightField, weightField, setWeightField, toShow, setToShow } = useImc()

    const handleCalculateButton = () => {
        if(hightField && weightField) {
            const result = calculateImc(hightField, weightField)
            if(result){
                setToShow(result)
            }else{
                alert('IMC fora da faixa definida')
            }
        }else{
            alert('Digite todos os campos')
        }
    }

    return(
        <div className="flex gap-[80px] flex-col p-5 md:flex-row md:p-0">
            <div className="flex-1">{/*LeftSide*/}
                <h1 className="text-3xl font-bold text-[#3A4B5C]">Calcule o seu IMC.</h1>
                <p className="mt-[20px] mb-[40px] text-[16px] text-[#6A7D8B]">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado
                    pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                </p>
                <input type="number"
                placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
                value={hightField > 0 ? hightField : ''}
                onChange={e=> setHightField(parseFloat(e.target.value))}
                className="w-full border-b-2 border-gray-400 border-opacity-50 py-[10px] px-[2px] mb-[20px] outline-none text-[14px] disabled:opacity-50"
                disabled={toShow ? true : false}
                />

                <input type="number"
                placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
                value={weightField > 0 ? weightField : ''}
                onChange={e=> setWeightField(parseFloat(e.target.value))}
                className="w-full border-b-2 border-gray-400 border-opacity-50 py-[10px] px-[2px] mb-[20px] outline-none text-[14px] disabled:opacity-50"
                disabled={toShow ? true : false}
                />

                <button onClick={handleCalculateButton}
                className={`bg-[#227C9D] text-[15px] py-[15px] w-full rounded-md text-white mt-[40px] ${!toShow ? 'hover:hover:bg-[#1a6681]' : ''} transition-all duration-200 disabled:opacity-50`}
                disabled={toShow ? true : false}>
                    Calcular
                </button>
            </div>
           <RightSide/>
        </div>   
    )
}