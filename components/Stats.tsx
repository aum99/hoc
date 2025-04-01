export default function StatsSection() {
  const stats = [
    { value: "75+", label: "Successful Clients" },
    { value: "25+", label: "Worldwide Clients" },
    { value: "4+", label: "Year of Experience" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  return (
    <div className="flex justify-center gap-20 p-10 px-20">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-white p-6 border-4 border-white rounded-lg shadow-md w-40 text-center"
        >
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className=" text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
