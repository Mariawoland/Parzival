import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from '../ui/button';
import Link from "next/link";

export const Footer = () => {
    return (
        <div>
            <SignedOut>
                <div className='w-full px-4'>

                    <hr className='bg-ten h-[1px] border-0' />
                    <div className="w-full flex items-center justify-between">
                        <p className='text-one text-[12px] p-1'>© Parzival | Developed by Mariam Ekizashvili</p>
                        <Button asChild>
                            <Link href='/sign-in'>LALA</Link>
                        </Button>
                    </div>

                </div>
            </SignedOut>
        </div>
    )
}
