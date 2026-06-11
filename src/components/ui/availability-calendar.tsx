"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Static booked dates — update monthly
const BOOKED_DATES: string[] = [
  "2026-06-14", "2026-06-20", "2026-06-21", "2026-06-27", "2026-06-28",
  "2026-07-04", "2026-07-05", "2026-07-11", "2026-07-18", "2026-07-19",
  "2026-07-25", "2026-07-26",
  "2026-08-01", "2026-08-08", "2026-08-15", "2026-08-22", "2026-08-23",
  "2026-08-29", "2026-08-30",
  "2026-09-05", "2026-09-06", "2026-09-12", "2026-09-19", "2026-09-20",
  "2026-09-26", "2026-09-27",
  "2026-10-03", "2026-10-04", "2026-10-10", "2026-10-17", "2026-10-18",
  "2026-10-24", "2026-10-25",
  "2026-11-07", "2026-11-08", "2026-11-14", "2026-11-21", "2026-11-22",
  "2026-11-28", "2026-11-29",
  "2026-12-05", "2026-12-06", "2026-12-12", "2026-12-13", "2026-12-19",
  "2026-12-20", "2026-12-26", "2026-12-27",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function toISO(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function AvailabilityCalendar() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayISO = toISO(now.getFullYear(), now.getMonth(), now.getDate());

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const bookedThisMonth = BOOKED_DATES.filter(d => d.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`)).length;
  const openWeekends = Math.max(0, 4 - Math.floor(bookedThisMonth / 2));

  return (
    <div className="bg-warm-gray-dark/5 border border-warm-gray-dark/10 rounded-2xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-heading font-bold text-foreground">Check Availability</h3>
        <div className="flex items-center gap-4 text-xs text-foreground/60">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" /> Available
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/60 inline-block" /> Booked
          </span>
        </div>
      </div>

      {/* Urgency banner */}
      {openWeekends <= 3 && (
        <div className="mb-5 bg-gold/10 border border-gold/30 text-gold text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-2">
          <span>🔥</span>
          <span>Only <strong>{openWeekends} weekend{openWeekends !== 1 ? "s" : ""}</strong> available in {MONTHS[month]}. Book before it's too late!</span>
        </div>
      )}

      {/* Month navigation */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-warm-gray-dark/10 transition-colors text-foreground/60 hover:text-foreground">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h4 className="font-heading font-semibold text-foreground text-lg">
          {MONTHS[month]} {year}
        </h4>
        <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-warm-gray-dark/10 transition-colors text-foreground/60 hover:text-foreground">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center text-xs font-semibold text-foreground/40 uppercase tracking-wider py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const iso = toISO(year, month, day);
          const isBooked = BOOKED_DATES.includes(iso);
          const isPast = iso < todayISO;
          const isToday = iso === todayISO;
          const dayOfWeek = (firstDay + day - 1) % 7;
          const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

          return (
            <div
              key={day}
              className={cn(
                "relative aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200",
                isPast && "opacity-30 cursor-not-allowed text-foreground/40",
                !isPast && isBooked && "bg-red-500/10 text-red-400 cursor-not-allowed ring-1 ring-red-500/20",
                !isPast && !isBooked && isWeekend && "bg-green-500/10 text-green-400 ring-1 ring-green-500/20 hover:bg-green-500/20 cursor-pointer",
                !isPast && !isBooked && !isWeekend && "hover:bg-warm-gray-dark/10 cursor-pointer text-foreground/70",
                isToday && "ring-2 ring-gold font-bold text-gold bg-gold/5"
              )}
            >
              {day}
              {!isPast && isBooked && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-400" />
              )}
            </div>
          );
        })}
      </div>

      <p className="text-xs text-foreground/40 text-center mt-5">
        Weekends highlighted in green are currently open. Tap a date and mention it in your inquiry.
      </p>
    </div>
  );
}
