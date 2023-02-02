import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { UserButton } from '@clerk/nextjs';

interface Navigation {
  name: string;
  href: string;
  current: boolean;
}

type NavProps = {
  children: string | JSX.Element | JSX.Element[];
  navigation: Navigation[];
  pageName?: string;
};

export function Navigation({ children, navigation, pageName }: NavProps) {
  return (
    <>
      <Disclosure as="nav" className="border-b border-gray-200 bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <h1 className="uppercase tracking-loose">Seekr</h1>
                  </div>
                  <div className="hidden sm:-my-px sm:ml-10 sm:flex sm:space-x-8">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'border-indigo-500 text-gray-900'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <div className="ml-4">
                    <UserButton
                      userProfileUrl="/dashboard/profile"
                      signInUrl="/sign-in"
                      afterSignOutUrl="/"
                      userProfileMode="navigation"
                      defaultOpen={false}
                    />
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="border-y border-gray-200 py-4">
                <div className="flex items-center px-4">
                  <UserButton
                    userProfileUrl="/dashboard/profile"
                    signInUrl="/sign-in"
                    afterSignOutUrl="/"
                    userProfileMode="navigation"
                    defaultOpen={false}
                  />
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="space-y-1 pt-2 pb-3">
                {navigation.map(item => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="min-h-full">
        <div className="py-10">
          <header>
            {pageName && (
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">{pageName}</h1>
              </div>
            )}
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <div className="h-96">{children}</div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
