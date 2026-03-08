export default function PremiumCard({ icon, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 p-4 mb-4 rounded-2xl 
      bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 
      shadow-lg cursor-pointer hover:scale-105 transition"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-lg font-medium text-gray-800">{text}</span>
    </div>
  );
}