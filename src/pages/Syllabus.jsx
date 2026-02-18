import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";

export default function Syllabus() {
  const { dept, sem, subject } = useParams();
  const subjectName = decodeURIComponent(subject);
  const [q, setQ] = useState("");

  const items = useMemo(
    () => [
      { title: "Syllabus", icon: "✅", tone: "from-emerald-100 to-sky-100" },
      { title: "Question Papers", icon: "📄", tone: "from-sky-100 to-indigo-100" },
      { title: "Notes", icon: "📝", tone: "from-amber-100 to-emerald-100" },
      { title: "Book / PDF", icon: "📚", tone: "from-orange-100 to-pink-100" },
    ],
    []
  );

  const filtered = items.filter((x) =>
    x.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <MainLayout
      title={subjectName}
      breadcrumb={`Home / ${dept.toUpperCase()} / Sem ${sem} / ${subjectName}`}
      showBack
      showSearch
      searchValue={q}
      onSearchChange={setQ}
    >
      <div className="space-y-3">
        {filtered.map((x) => (
          <button
            key={x.title}
            onClick={() => alert(`${x.title} open (demo). PDF add karoge to yahi se open hoga.`)}
            className="w-full rounded-[22px] border border-white/70 bg-white/55 shadow-sm overflow-hidden text-left"
          >
            <div className={`p-[1px] bg-gradient-to-r ${x.tone}`}>
              <div className="flex items-center justify-between rounded-[21px] bg-white/60 px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-white/70 shadow-sm grid place-items-center text-xl">
                    {x.icon}
                  </div>
                  <div className="text-[17px] font-extrabold text-slate-800">
                    {x.title}
                  </div>
                </div>
                <div className="text-slate-600 text-xl">›</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </MainLayout>
  );
}