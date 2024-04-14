import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowTrendingUpIcon,
  BellIcon,
  BriefcaseIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  CubeIcon,
  DocumentTextIcon,
  GlobeEuropeAfricaIcon,
  HomeIcon,
  RectangleGroupIcon,
  ServerStackIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Blocks", href: "/blocks", icon: CubeIcon },
  {
    name: "Synoptics",
    href: "/synoptics",
    icon: RectangleGroupIcon,
  },
  {
    name: "Playgrounds",
    href: "/playgrounds",
    icon: ArrowTrendingUpIcon,
  },
  { name: "Reports", href: "/reports", icon: ChartPieIcon },
  {
    name: "Energies",
    href: "/energies",
    icon: GlobeEuropeAfricaIcon,
  },
  { name: "Billing", href: "/billing", icon: DocumentTextIcon },
  { name: "Projects", href: "/projects", icon: BriefcaseIcon },
  { name: "Alarms", href: "/alarms", icon: BellIcon },
  {
    name: "Config",
    href: "/configuration",
    icon: Cog6ToothIcon,
  },
  {
    name: "Monitoring",
    href: "/monitoring",
    icon: ServerStackIcon,
  },
];

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: Readonly<{
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}>) {
  const pathname = usePathname();

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-600 px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      className="h-8 w-auto"
                      src="/dametis.svg"
                      alt="Your Company"
                      width={32}
                      height={32}
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={cn(
                                  (
                                    item.href === "/"
                                      ? pathname === "/"
                                      : pathname.startsWith(item.href)
                                  )
                                    ? "bg-blue-700 text-white"
                                    : "text-blue-200 hover:text-white hover:bg-blue-700",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                                )}
                              >
                                <item.icon
                                  className={cn(
                                    (
                                      item.href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(item.href)
                                    )
                                      ? "text-white"
                                      : "text-blue-200 group-hover:text-white",
                                    "h-6 w-6 shrink-0",
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-600 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Image
              className="h-8 w-auto"
              src="/dametis.svg"
              alt="Your Company"
              width={32}
              height={32}
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          (
                            item.href === "/"
                              ? pathname === "/"
                              : pathname.startsWith(item.href)
                          )
                            ? "bg-blue-700 text-white"
                            : "text-blue-200 hover:text-white hover:bg-blue-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                        )}
                      >
                        <item.icon
                          className={cn(
                            (
                              item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href)
                            )
                              ? "text-white"
                              : "text-blue-200 group-hover:text-white",
                            "h-6 w-6 shrink-0",
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
