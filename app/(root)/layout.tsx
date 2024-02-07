import { Header } from "@/components/shared/Header";
import ForeverBackground from "@/components/shared/ForeverBackground";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (

        <div className="flex flex-col h-screen">

            <Header />
            <main className="flex-1 mt-[80px]">
                <ForeverBackground />
                {children}
            </main>
        </div>

    )
}
