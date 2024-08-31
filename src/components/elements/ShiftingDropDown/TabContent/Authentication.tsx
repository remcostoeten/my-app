import React from "react";
import { FiHelpCircle, FiUserPlus, FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { textContent } from "../textContent";

export default function Authentication() {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <Link
        href="/login"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiLogIn className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">{textContent.authentication.login}</span>
      </Link>
      <Link
        href="/register"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiUserPlus className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">{textContent.authentication.register}</span>
      </Link>
      <Link
        href="/help"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHelpCircle className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">{textContent.authentication.help}</span>
      </Link>
    </div>
  );
}
