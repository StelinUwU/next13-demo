"use client";

import { SimpleWidget } from "@/components/ui";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-wrap p-2 justify-center items-center">
      <SimpleWidget
        title={count.toString()}
        subtitle="Productos agregados"
        label="Contador"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
