'use client'
import Icon from "@/app/shared/Icon";
import { UserButton } from '@clerk/nextjs';
import Link from "next/link";
import {usePathname} from "next/navigation";
const Header = ()=>{
    const menuLink:{label:string,href:string}[] = [
        {
            label:'Dashbaord',
            href:'/dashboard'
        },
        {
            label:'Questions',
            href:'/questions'
        },
        {
            label:'Devenir premium',
            href:'/premium'
        },
        {
            label:'Comment ça marche ?',
            href:'/help'
        },
    ]
    const path = usePathname()
    return(
        <header className={'bg-secondary flex justify-between w-full h-20 px-8 items-center shadow-xl  rounded-md'}>
           <Icon name={'Logo'} type={'svg'} displayAssetProps={{
               color:'#ac042b',
               width:40,
               height:40,
           }} />
            <div className="flex-grow items-center gap-x-5 justify-center flex">
                {
                    menuLink.map((link) =>(
                        <Link className={`text-xl hover:font-semibold  hover:text-primary transition-colors  ${path === link.href ? 'text-primary font-semibold':''} `} href={link.href}> {link.label}</Link>
                    ))
                }
            </div>
            <div>
                <UserButton />
            </div>
        </header>
    )
}
export default Header;