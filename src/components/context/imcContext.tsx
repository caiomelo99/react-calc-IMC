import { Level } from "@/types/typeLevel";
import React, { createContext, ReactNode, useContext, useState} from "react";

type ImcContextType = {
    hightField: number;
    setHightField: React.Dispatch<React.SetStateAction<number>>;
    weightField: number;
    setWeightField: React.Dispatch<React.SetStateAction<number>>;
    toShow: Level | null;
    setToShow: React.Dispatch<React.SetStateAction<Level | null>>;
}

const imcContext = createContext<ImcContextType | undefined>(undefined)

export const ImcProvider = ({children}:{children: ReactNode}) => {
    const [hightField, setHightField] = useState<number>(0)
    const [weightField,  setWeightField] = useState<number>(0)
    const [toShow, setToShow] = useState<Level | null>(null)

    return (
        <imcContext.Provider value={{hightField, setHightField, weightField, setWeightField, toShow, setToShow}}>
            {children}
        </imcContext.Provider>
    )
}

export const useImc = (): ImcContextType => {
    const context = useContext(imcContext);
    if (!context) {
      throw new Error("useImc deve ser usado dentro de um ImcProvider");
    }
    return context;
  };