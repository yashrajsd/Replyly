import { RocketDuoToneWhite, SettingsDuoToneWhite } from '@/icons'
import { AutomationDuoToneWhite } from '@/icons/automation-duotone-white'
import { HomeDuoToneWhite } from '@/icons/home-duo-tone-white'
import {v4 as uuid} from 'uuid'

type FieldProps={
    label:string
    id:string
}

type SideBarProps={
    icon:React.ReactNode
}& FieldProps

export const SIDEBAR_MENU: SideBarProps[] = [
    {
        id:uuid(),
        label:"home",
        icon:<HomeDuoToneWhite/>
    },
    {
        id:uuid(),
        label:"automation",
        icon:<AutomationDuoToneWhite/>
    },
    {
        id:uuid(),
        label:"integration",
        icon:<RocketDuoToneWhite/>
    },
    {
        id:uuid(),
        label:"settings",
        icon:<SettingsDuoToneWhite/>
    }
]