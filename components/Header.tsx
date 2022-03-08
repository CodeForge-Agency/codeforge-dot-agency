import React from 'react'

const Header = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-900">
      <nav className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
              href="#"
            >
              Brand
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-col space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0">
          <a
            className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
            href="#team"
          >
            Blacksmiths
          </a>
          <a
            className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
            href="#benefit"
          >
            What We Do
          </a>
          <a
            className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <a
          className="mt-4 block h-10 transform rounded-md border px-5 py-2 text-center text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 lg:mt-0 lg:w-auto"
          href="#bottom"
        >
          Contact Us
        </a>
      </nav>

      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We are <span className="text-black">Code</span>
            <span className="text-orange-600">Forge</span>
          </h1>

          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>

          <div className="mx-auto mt-6 w-full max-w-sm rounded-md border bg-transparent focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:border-gray-700 dark:focus-within:border-blue-300">
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="m-1 h-10 flex-1 appearance-none border-none bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:ring-0 dark:text-gray-200"
              />

              <button
                type="button"
                className="m-1 h-10 transform rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
