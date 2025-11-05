
import React from 'react';

interface DateRangePickerProps {
  value: { start: string; end: string };
  onChange: (value: { start: string; end: string }) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ value, onChange }) => {
  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, start: e.target.value });
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, end: e.target.value });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 text-sm w-full">
      <label htmlFor="start-date" className="text-slate-400">De:</label>
      <input
        id="start-date"
        type="date"
        value={value.start}
        onChange={handleStartChange}
        className="bg-slate-700 border border-slate-600 rounded-md px-3 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <label htmlFor="end-date" className="text-slate-400">Até:</label>
      <input
        id="end-date"
        type="date"
        value={value.end}
        onChange={handleEndChange}
        className="bg-slate-700 border border-slate-600 rounded-md px-3 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>
  );
};

export default DateRangePicker;
