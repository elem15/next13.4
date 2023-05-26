"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import getData from '../getData';

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${search}/`);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl "
      />
      <button className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'>🚀</button>
    </form>
  );
}
