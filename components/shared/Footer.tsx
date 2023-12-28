import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from '../ui/button';
import Link from "next/link";

export const Footer = () => {
    return (
        <div>
            <SignedOut>
                <div className='w-full px-4'>

                    <hr className='bg-ten h-[1px] border-0' />
                    <div className="w-full flex items-start justify-between">
                        <p className='text-one sm:text-[12px] text-[10px] p-1'>© Parzival | Developed by Mariam Ekizashvili</p>
                        <Link href='/sign-in'>
                            <img className="w-[15px] h-[15px]" src="/assets/icons/Link.png" />
                        </Link>
                    </div>

                </div>
            </SignedOut>
        </div>
    )
}
