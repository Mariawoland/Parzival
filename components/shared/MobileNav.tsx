import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

import { NavItems } from "./NavItems";


export default function MobileNav() {
    return (
        <Sheet>

            <SheetTrigger className="m-0 p-0 w-8 max-w-8 min-w-8 max-h-8 min-h-8 h-8">
                <img className="w-8 h-8" src='/assets/icons/menu.png' alt="Menu Button" />
            </SheetTrigger>

            <SheetContent className='bg-one-1 p-4 border-0' style={{ zIndex: '1000' }}>

                <SheetHeader>

                    <SheetTitle>

                        <Link href='/'>
                            <Image width={200} height={60} src='/assets/logos/Logo1.webp' alt="Parzival Logo" />
                        </Link>

                    </SheetTitle>

                    <SheetDescription>
                        <NavItems />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}