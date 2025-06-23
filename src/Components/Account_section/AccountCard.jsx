// AccountCard.jsx
function AccountCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all">
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h2 className="text-xl font-bold mb-2 text-blue-600">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default AccountCard;
