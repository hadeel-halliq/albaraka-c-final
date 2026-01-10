export default function ProductTable({ title, headers, data }) {
  return (
    <div className="rounded-xl  overflow-hidden w-fit border border-gray-400 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.6)] cursor-pointer" >
        <table className="table-auto border-collapse w-[300px] text-center" dir="rtl">
        <thead>
            <tr>
                <th colSpan={headers.length} className="border-b-[1px] border-gray-400 p-1.5 bg-primary text-white text-lg " dir="ltr">{title}</th>
            </tr>
            <tr>
            {headers.map((header, index) => (
                <th key={index} className="bg-gray-50 p-1">{header}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                {row.map((cell, i) => (
                <td key={i} className="p-1">{cell}</td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
}
