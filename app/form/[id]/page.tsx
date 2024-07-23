"use client";
import Widget from "@/components/Widget";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from "next/navigation";
import { forms } from "@/data/forms";

export default function page() {
  const { id } = useParams();
  const form = forms.find((form) => form.id.toString() === id);
  if (!form) {
    return <div>Form not found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-start px-24 justify-start bg-neutral-100">
      <div className="w-full flex flex-row items-start  py-5 justify-between">
        <Link
          href="/"
          className="outline-1 hover:bg-neutral-200 active:bg-neutral-300 outline border p-2 rounded-md font-semibold transition-all duration-100"
        >
          <BsArrowLeft />
        </Link>
        <h1 className="text-3xl bg-transparent  rounded-md font-semibold text-center">
          {form.title}
        </h1>
        <div></div>
      </div>
      <div className="flex flex-row items-start justify-center py-5 gap-3 bg-neutral-100 w-full">
        <div className="w-2/4 flex flex-col justify-start items-start gap-2 p-6 border-[1px]">
          {form.widgets.length === 0 ? (
            <div className="w-full flex flex-row justify-center items-center border-neutral-300 border-[1px] min-h-36 rounded-md font-semibold text-lg text-neutral-700">
              No Found Widgets
            </div>
          ) : (
            form.widgets.map((element) => {
              return (
                <Widget element={element} key={element.id} editable={false} />
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
