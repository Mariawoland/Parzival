import ForeverBackground from "@/components/shared/ForeverBackground"
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-center min-h-screen w-full ">
            <ForeverBackground />
            {children}
        </div>
    )
}

export default Layout