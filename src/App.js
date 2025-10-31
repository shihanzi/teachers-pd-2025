import Countdown from "./components/Countdown";
import Speakers from "./components/Speakers";
import { Facebook, Youtube, MessageCircle } from "lucide-react";
import DarkModeToggle from "./components/DarkModeToggle";
import React, { useState, useEffect } from "react";


function App() {

  const [showNotice, setShowNotice] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setShowNotice(true), 5000);
  return () => clearTimeout(timer);
}, []);

  const eventDate = new Date("2025-11-05T09:00:00");
  return (

    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <DarkModeToggle />
      <h1 className="text-4xl font-bold mb-4 text-green-700">
        Gampaha District Ahadiyya (Dahham) Schools Federation
      </h1>
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Teachers' Professional Development Program 2025
      </h1>
      <p className="mb-6">📅 November 5, 2025 | Gampaha</p>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <Countdown targetDate={eventDate} />
        <a
          href="/event.ics"
          download="TeachersPD2025.ics"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Add to Calendar
        </a>
        <Speakers />
      </div>
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Venue</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1675359112555!2d79.89073277581807!3d6.989538317570538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f7dc26161d1d%3A0x27d7e6940c2220af!2sWattala%20Mabole%20Urban%20Council!5e0!3m2!1sen!2slk!4v1761755378283!5m2!1sen!2slk"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow"
          title="Event Location Map"
        ></iframe>
      </div>
      <div className="mt-16 text-center">
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Stay Connected
          </h2>
          <p className="text-gray-700 mb-4">
            Follow us for event updates and future programs 👇
          </p>

          <div className="flex justify-center space-x-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/94759552655"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow transition"
            >
              <MessageCircle className="w-6 h-6" />
            </a>

            {/* Facebook */}
            <a
              href="https://web.facebook.com/stagetvsl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow transition"
            >
              <Facebook className="w-6 h-6" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@StageTv-115"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow transition"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {showNotice && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg p-6 max-w-md text-center relative">
      <p className="text-lg mb-4">
        ⚠️ This event is not open to the public.
        <br />
        Participation is limited to Ahadiyya (Daham) School staff only.
      </p>
      <button
        onClick={() => setShowNotice(false)}
        className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
      >
        OK, Got it
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default App;
