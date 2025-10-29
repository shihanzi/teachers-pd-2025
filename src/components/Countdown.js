import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ expired: true });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.expired) return <p className="text-red-600 font-semibold">Event Started!</p>;

  return (
    <div className="flex space-x-4 text-center">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="bg-white rounded-xl shadow p-4">
          <p className="text-3xl font-bold text-blue-700">{timeLeft[unit]}</p>
          <p className="text-sm text-gray-500">{unit}</p>
        </div>
      ))}
    </div>
  );
}
