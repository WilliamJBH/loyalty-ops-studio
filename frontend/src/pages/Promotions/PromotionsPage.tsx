import { mockPromotions } from "./mockPromotions";

function StatusPill({ status }: { status: string }) {
  const style: React.CSSProperties = {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "999px",
    fontSize: "12px",
    border: "1px solid #ddd",
  };

  return <span style={style}>{status}</span>;
}

export function PromotionsPage() {
  return (
    <div>
      <h1>Promotions</h1>

      <p style={{ marginBottom: "16px" }}>
        List of existing promotions (mock data). Later this will be connected to
        a real API.
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Type</th>
            <th style={thStyle}>Discount</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Min Ticket</th>
            <th style={thStyle}>Start</th>
            <th style={thStyle}>End</th>
            <th style={thStyle}>Updated At</th>
          </tr>
        </thead>

        <tbody>
          {mockPromotions.map((promo) => (
            <tr key={promo.id}>
              <td style={tdStyle}>{promo.id}</td>
              <td style={tdStyle}>{promo.name}</td>
              <td style={tdStyle}>
                <StatusPill status={promo.status} />
              </td>
              <td style={tdStyle}>{promo.type}</td>
              <td style={tdStyle}>{promo.discountValue}</td>
              <td style={tdStyle}>{promo.category ?? "-"}</td>
              <td style={tdStyle}>
                {promo.minTicketAmount != null
                  ? `$${promo.minTicketAmount}`
                  : "-"}
              </td>
              <td style={tdStyle}>{promo.startDate}</td>
              <td style={tdStyle}>{promo.endDate}</td>
              <td style={tdStyle}>{promo.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  borderBottom: "1px solid #ddd",
  padding: "8px",
};

const tdStyle: React.CSSProperties = {
  borderBottom: "1px solid #eee",
  padding: "8px",
};
