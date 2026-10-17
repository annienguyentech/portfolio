import model from "../data/costcoModel.json";
const notes: Record<string, string[]> = {
  "Income statement": [
    "The model separates merchandise sales and membership fees, making their growth assumptions visible.",
    "Forecast expenses, taxes, and dividends flow through to net income and retained earnings.",
    "Test growth and margin assumptions before interpreting a change in forecast profit.",
  ],
  "Balance sheet": [
    "Working capital, property and equipment, debt, and equity are connected to the operating assumptions.",
    "The workbook includes a balance sheet check. Small nonzero forecast differences remain in the supplied file.",
    "Reconcile those differences before treating the workbook as a finalized financial model.",
  ],
  "Cash flow statement": [
    "Operating cash flow starts from forecast net income and adjusts for depreciation and working capital.",
    "Capital expenditure, debt movements, dividends, and repurchases explain how earnings translate into cash.",
    "Review cash balances against the model’s minimum cash assumption before considering additional financing.",
  ],
};
export function CostcoModel() {
  return (
    <section className="space-y-10" aria-label="Costco financial model">
      <div className="rounded-xl bg-muted p-5 text-sm leading-relaxed text-muted-foreground">
        Workbook preview. Values below are the saved outputs from the supplied Excel file, in
        billions of US dollars except percentages. The workbook labels 2024A to 2026A as actual
        periods and 2027P to 2031P as projections. This preview does not recalculate the model.
      </div>
      {Object.entries(model).map(([title, rows]) => (
        <section key={title} id={title.toLowerCase().replaceAll(" ", "-")}>
          <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
          <div
            className="overflow-x-auto rounded-xl border border-border"
            role="region"
            aria-label={`${title} table`}
            tabIndex={0}
          >
            <table className="w-full min-w-[850px] text-right text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-3 text-left">Model line</th>
                  {["2024A", "2025A", "2026A", "2027P", "2028P", "2029P", "2030P", "2031P"].map(
                    (y) => (
                      <th key={y} className="p-3">
                        {y}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-muted/50" : "bg-white"}>
                    <th className="whitespace-nowrap px-3 py-2 text-left font-medium">
                      {row.label}
                    </th>
                    {row.values.map((value, j) => (
                      <td
                        key={j}
                        title={row.formulas[j] || undefined}
                        className={`px-3 py-2 tabular-nums ${j > 2 ? "text-primary" : ""}`}
                      >
                        {value || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mb-3 mt-5 font-semibold">Findings and recommendations</h3>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            {notes[title].map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}
