"use client";
import { cn } from "@/lib/utils";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  SunIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PencilIcon,
  ShareIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { DatePickerWithRange } from "@/components/ui/daterangepicker";

const stats = [
  {
    id: 1,
    name: "Energy consumption",
    stat: "71,897 kWh",
    icon: BoltIcon,
    change: "122",
    changeType: "increase",
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "Current power",
    stat: "2,356 kW",
    icon: BoltIcon,
    change: "54",
    changeType: "increase",
    color: "bg-orange-500",
  },
  {
    id: 3,
    name: "Performance",
    stat: "24.57%",
    icon: ArrowTrendingUpIcon,
    change: "3.2%",
    changeType: "decrease",
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "Energy waste",
    stat: "897 Wh",
    icon: BoltIcon,
    change: "32",
    changeType: "decrease",
    color: "bg-black/60",
  },
  {
    id: 5,
    name: "Current temperature",
    stat: "21.4 °C",
    icon: SunIcon,
    change: "0.4",
    changeType: "increase",
    color: "bg-red-500",
  },
  {
    id: 6,
    name: "Productivity",
    stat: "324 kg/h",
    icon: TruckIcon,
    change: "1.2%",
    changeType: "increase",
    color: "bg-blue-500",
  },
] as const;

const variables = [
  {
    name: "Variable 1",
    type: "Temperature",
    value: "21.4 °C",
    date: "04/13/2024, 03:51",
  },
  {
    name: "Variable 2",
    type: "Pressure",
    value: "1.2 bar",
    date: "04/13/2024, 03:52",
  },
  {
    name: "Variable 3",
    type: "Flow",
    value: "324 kg/h",
    date: "04/13/2024, 03:57",
  },
  {
    name: "Variable 4",
    type: "Temperature",
    value: "21.4 °C",
    date: "04/13/2024, 03:56",
  },
  {
    name: "Variable 5",
    type: "Pressure",
    value: "1.2 bar",
    date: "04/13/2024, 03:47",
  },
  {
    name: "Variable 6",
    type: "Flow",
    value: "324 kg/h",
    date: "04/13/2024, 03:50",
  },
  {
    name: "Variable 7",
    type: "Temperature",
    value: "21.4 °C",
    date: "04/13/2024, 03:53",
  },
  {
    name: "Variable 8",
    type: "Pressure",
    value: "1.2 bar",
    date: "04/13/2024, 03:58",
  },
  {
    name: "Variable 9",
    type: "Flow",
    value: "324 kg/h",
    date: "04/13/2024, 03:56",
  },
  {
    name: "Variable 10",
    type: "Temperature",
    value: "21.4 °C",
    date: "04/13/2024, 03:44",
  },
  {
    name: "Variable 11",
    type: "Pressure",
    value: "1.2 bar",
    date: "04/13/2024, 02:09",
  },
] as const;

export default function Report({ params }: { params: { report: string } }) {
  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div className="flex">
                  <Link
                    href="/reports"
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Reports
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <Link
                    href="/reports/1"
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Report
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {params.report}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <UserIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Florent Klein
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <TagIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Air comprimé
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              1 day ago
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span>
            <DatePickerWithRange />
          </span>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <PencilIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Edit
            </button>
          </span>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <ShareIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Share
            </button>
          </span>

          <span className="ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <CheckIcon
                className="-ml-0.5 mr-1.5 h-5 w-5"
                aria-hidden="true"
              />
              Save
            </button>
          </span>

          {/* Dropdown */}
          <Menu as="div" className="relative ml-3 sm:hidden">
            <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
              More
              <ChevronDownIcon
                className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="#"
                      className={cn(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700",
                      )}
                    >
                      Edit
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="#"
                      className={cn(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700",
                      )}
                    >
                      View
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className={cn("absolute rounded-md p-3", item.color)}>
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              <p
                className={cn(
                  item.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold",
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowUpIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}
                <span className="sr-only">
                  {" "}
                  {item.changeType === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link
                    href="/playgrounds/1"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Open in Playground
                  </Link>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
      <div className="overflow-hidden shadow sm:rounded-lg mt-5">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Value
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Date
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Open in Playground</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {variables.map((variable) => (
              <tr key={variable.name}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {variable.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {variable.type}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {variable.value}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {variable.date}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <Link
                    href="/playgrounds/1"
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Open in Playground
                    <span className="sr-only">, {variable.name}</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
