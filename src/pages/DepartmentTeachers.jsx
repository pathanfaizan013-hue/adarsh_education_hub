import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const deptTitle = (k) => {
  const map = { bsc: "B.Sc Department", bca: "BCA Department", bcs: "BCS Department", ba: "BA Department", bcom: "B.Com Department" };
  return map[k] || "Department";
};

const data = {
  bca: [
    { name: "Prof. A. Khan", edu: "MCA, NET", subject: "Python" },
    { name: "Prof. S. Shaikh", edu: "MCA", subject: "Cyber Security" },
    { name: "Prof. R. Patil", edu: "M.Tech", subject: "Software Engineering" },
  ],
};

export default function DepartmentTeachers() {
  const { dept } = useParams();
  const list = data[dept] || [
    { name: "Teacher 1", edu: "M.Sc", subject: "Subject" },
    { name: "Teacher 2", edu: "M.A", subject: "Subject" },
  ];

  return (
    <MainLayout title={deptTitle(dept)} breadcrumb={`Home / Teachers / ${deptTitle(dept)}`} showBack>
      <div className="space-y-3">
        {list.map((t, idx) => (
          <div key={idx} className="rounded-2xl bg-white/60 p-4 shadow-sm">
            <div className="text-lg font-extrabold text-slate-800">{t.name}</div>
            <div className="text-sm text-slate-600 mt-1">🎓 {t.edu}</div>
            <div className="text-sm text-slate-600">📘 Teaches: {t.subject}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}