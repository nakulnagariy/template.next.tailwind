import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="text-gray-300 rounded-full outline-none focus:outline-none">
          <span className="sr-only">Light Mode</span>

          <SunIcon
            className='w-8 h-8 ml-2 text-yellow-500 '
            role='button'
            />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20">
          <span className="sr-only">Dark Mode</span>
          <MoonIcon
            className='w-8 h-8 ml-2 text-gray-900 '
            role='button'
            />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;