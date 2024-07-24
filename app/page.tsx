"use client";

import Link from "next/link";
import React from "react";
import { forms } from "@/data/forms";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-start justify-center p-24 gap-3 bg-neutral-100">
      <div className="w-full h-full flex flex-col items-start justify-start gap-2 p-6 border-[1px]">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold text-neutral-700">Forms</h1>
          <Link
            href="/form/create"
            className="outline-1 hover:bg-neutral-200 active:bg-neutral-300 outline border p-2 rounded-md font-semibold transition-all duration-100"
          >
            Create
          </Link>
        </div>
        <div className="w-full flex flex-row justify-start items-center border-neutral-300 border-[1px] min-h-36 rounded-md font-semibold text-lg text-neutral-700 gap-3 p-4">
          {forms.length === 0 ? (
            <div className="w-full flex flex-row justify-center items-center border-neutral-300 border-[1px] min-h-36 rounded-md font-semibold text-lg text-neutral-700">
              No forms available
            </div>
          ) : (
            forms.map((form) => (
              <Link
                href={"form/" + form.id}
                className="w-52 flex flex-col justify-start items-start p-6 border hover:bg-neutral-200 transition-all duration-100 rounded-md active:bg-neutral-300"
              >
                <h2 className="font-bold">{form.title}</h2>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
