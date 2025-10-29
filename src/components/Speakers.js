import rahman from "../assets/speakers/rahman.jpg";
import asra from "../assets/speakers/asra.jpg";
import firshad from "../assets/speakers/firshad.jpg";
import thawseef from "../assets/speakers/thawseef.jpg";
import shihan from "../assets/speakers/Shihan.jpg";

const speakers = [
  {
    name: "Abdur Rahman",
    qualifications: "(MBA)",
    title: "கற்றல், கற்பித்தல்",
    time: "9:30 AM - 10:15 AM",
    photo: rahman,
  },
  {
    name: "Mrs.Asra Farwin",
    qualifications: "(B.A , Diploma in Counseling psychology)",
    title: "சிறுவர்களை கற்பிப்பதில் அணுகுவது எப்படி?",
    time: "10:15 AM - 10:45 AM",
    photo: asra,
  },
  {
    name: "Firshad Mohamed",
    qualifications: "(Certified in Advanced English & Dip In English)",
    title: "How to Teach Effectively",
    time: "10:45 AM - 11:15 AM",
    photo: firshad,
  },
  {
    name: "Thawseef Ahamed",
    qualifications: "Motivating Speaker",
    title: "කාලීන සමාජ විපර්යාස සමඟ අහදියා ගුරුවෘත්තිය",
    time: "11:15 AM - 12:00 PM",
    photo: thawseef,
  },
  {
    name: "Shihan Mohamed",
    qualifications: "B.Eng (Hons) Software Engineering",
    title: "தொழில்நுட்பத்தின் வழியில் இஸ்லாம்",
    time: "1:00 PM - 2:00 PM",
    photo: shihan,
  },
];

export default function Speakers() {
  return (
    <div className="mt-12 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600 text-center">Agenda & Speakers</h2>
      <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
        {speakers.map((s, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-col items-center space-y-2 w-64">
            <img src={s.photo} alt={s.name} className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h3 className="font-bold text-lg">{s.name}</h3>
              <h5 className="font-bold text-lg">{s.qualifications}</h5>
              <p className="text-sm text-gray-600">{s.title}</p>
              <p className="text-sm text-blue-500 mt-1">{s.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}