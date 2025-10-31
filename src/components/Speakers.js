import qirath from "../assets/speakers/qirath.jpg";
import rahman from "../assets/speakers/rahman.jpg";
import asra from "../assets/speakers/asra.jpeg";
import firshad from "../assets/speakers/firshad.jpg";
import thawseef from "../assets/speakers/thawseef.jpg";
import shihan from "../assets/speakers/Shihan.jpg";
import stagetv from "../assets/speakers/stage.png";
import kabeer from "../assets/speakers/kabeer.jpg";
import rimas from "../assets/speakers/rimas.jpg";

const speakers = [
  {
    name: "Student",
    qualifications: "(Grade 11)",
    title: "கிராத்",
    time: "9:00 AM - 09:05 AM",
    photo: qirath,
  },
  {
    name: "செயலாளர் ",
    qualifications: "Secretary Ahadiyya Schools Federation",
    title: "வரவேற்பு உரை",
    time: "9:05 AM - 09:15 AM",
    photo: qirath,
  },
  {
    name: "President",
    qualifications: "President Ahadiyya Schools Federation",
    title: "அஹாதியா ஓர் அறிமுகம்",
    time: "9:15 AM - 09:30 AM",
    photo: qirath,
  },
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
    time: "1:15 PM - 2:30 PM",
    photo: shihan,
  },
  {
    name: "Teacher's Q&A Session",
    qualifications: "",
    title: "Open Discussion",
    time: "2:30 PM - 3:00 PM",
    photo: stagetv,
  },
   {
    name: "Award Ceremony",
    qualifications: "",
    title: "Recognition of Outstanding Teachers",
    time: "3:00 PM - 4:00 PM",
    photo: stagetv,
  },
  {
    name: "Stage tv எதிர்பார்ப்பது என்ன?",
    qualifications: "Rimas",
    title: "Coordinator Stage tv",
    time: "4:00 PM - 4:15 PM",
    photo: rimas,
  },
  {
    name: "நன்றி உரை",
    qualifications: "Kabeer",
    title: "Coordinator Stage tv",
    time: "4:15 PM - 4:30 PM",
    photo: kabeer,
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