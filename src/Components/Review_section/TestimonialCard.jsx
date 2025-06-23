// TestimonialCard.jsx
function TestimonialCard({ name, feedback, role, avatar, bgColor }) {
  return (
    <div
      className={`min-w-[250px] max-w-sm ${bgColor} shadow-lg rounded-xl p-4 mx-2 transition-transform`}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
        />
        <div>
          <h3 className="font-bold text-blue-700">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-800 italic">“{feedback}”</p>
    </div>
  );
}

export default TestimonialCard;
