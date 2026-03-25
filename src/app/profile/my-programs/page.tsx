export default function MyProgramms() {
  const programs = [
    { id: 0, title: "Basic Fronted" },
    { id: 1, title: "Advanced Fronted" },
    { id: 3, title: "Backend" },
  ];
  return (
    <div>
      <h2>My Programms</h2>
      <ul>
        {programs.map((program) => (
          <li
            key={program.id}
            className="p-2 m-2 rounded-2xl shadow bg-gray-300"
          >
            {program.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
