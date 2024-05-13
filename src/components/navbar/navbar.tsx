import React from 'react'
import { MainNav } from './main_nav'
import { UserNav } from './user_nav'
import { Input } from '../ui/input'
import useScrollHook from '../../hooks/useScrollbar'
import { cn } from '../../lib/utils'

export const Navbar = () => {
    const {scrolled} = useScrollHook();

    return (
        <div className={cn("border-b", scrolled && "fixed bg-card")}>
            <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <div>
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="md:w-[100px] lg:w-[300px]"
                        />
                    </div>
                    <UserNav />
                </div>
            </div>
        </div>
    )
}