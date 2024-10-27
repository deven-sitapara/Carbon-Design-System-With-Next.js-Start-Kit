"use client";
import { ThemeDropdown } from "@/components/ThemeSelector/ThemeDropdown";
import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";

export default function Home() {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <ThemeDropdown></ThemeDropdown>
    </div>
  );
}
