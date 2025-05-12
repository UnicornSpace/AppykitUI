import { SideNavBar } from "@/components/side-navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { navigation } from "@/config/navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="lg:flex relative md:px-8 items-start prose dark:prose-invert">
            <aside className="hidden lg:sticky lg:top-0 lg:block lg:w-[270px] lg:max-w-[270px] lg:min-w-[270px] h-screen">
                <ScrollArea className="h-full flex flex-col w-full gap-4 py-6 lg:py-8">
                    <SideNavBar navigation={navigation} />
                </ScrollArea>
            </aside>
            <div className="py-8 z-10 px-6 overflow-y-auto flex-1">{children}</div>


        </div>
    );
}