import { StatusBarStyle } from "react-native"

interface ColorField{
    statusBar: StatusBarStyle;
    background: string;
    text?: string;
    confirm?: string;
    deconfirm?:string;
}

const darkStyle:ColorField = {
    statusBar : 'dark-content',
    background: '#338899'
}


const lightStyle:ColorField = {
    statusBar : 'light-content',
    background: '#aa5599'
}



export const ColorsSys = {
    'dark':darkStyle
    ,
    'light':lightStyle
}