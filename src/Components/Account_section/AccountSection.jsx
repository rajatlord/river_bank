// AccountsSection.jsx
import { accounts } from "./AccountData";
import AccountCard from "./AccountCard";
import accounts_section from "../../assets/accounts_section.jpeg";

function AccountsSection({id}) {
  return (
    <section id={id} className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 py-16 bg-gray-50">
      <div className="flex-1">
        <img src={accounts_section} alt="accounts_section"  className="rounded-2xl shadow-lg w-full h-auto object-cover" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-center lg:text-left mb-8">
          Our Account Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {accounts.map((account) => (
            <AccountCard key={account.id} {...account} />
          ))}
        </div>
      </div>{" "}
    </section>
  );
}

export default AccountsSection;
