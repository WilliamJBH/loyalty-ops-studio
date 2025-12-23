import React, { useState } from "react";
import { mockPromotions } from "./mockPromotions";
import type { Promotion, PromotionType, PromotionStatus } from "./types";

function StatusPill({ status }: { status: PromotionStatus }) {
  const style: React.CSSProperties = {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "999px",
    fontSize: "12px",
    border: "1px solid #ddd",
  };

  return <span style={style}>{status}</span>;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString();
}

export function PromotionsPage() {
  const [promotions, setPromotions] = useState<Promotion[]>(mockPromotions);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [type, setType] = useState<PromotionType>("percentage");
  const [discountValue, setDiscountValue] = useState<number>(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");

  function handleCreatePromotion(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (discountValue <= 0) {
      alert("Discount must be greater than 0");
      return;
    }

    if (endDate <= startDate) {
      alert("End date must be after start date");
      return;
    }

    const now = new Date().toISOString();

    const newPromotion: Promotion = {
      id: `PROMO-${crypto.randomUUID()}`,
      name,
      type,
      discountValue,
      startDate: `${startDate}T00:00:00Z`,
      endDate: `${endDate}T23:59:59Z`,
      category,
      status: "draft",
      createdBy: "current.user",
      updatedAt: now,
    };

    setPromotions((prev) => [newPromotion, ...prev]);

    setName("");
    setDiscountValue(0);
    setStartDate("");
    setEndDate("");
    setCategory("");
    setShowForm(false);
  }

  return (
    <div>
      <h1>Promotions</h1>

      <p style={{ marginBottom: "16px" }}>
        List of existing promotions (mock data). Later this will be connected to
        a real API.
      </p>

      <button onClick={() => setShowForm(true)} disabled={showForm}>
        New Promotion
      </button>

      {showForm && (
        <div
          style={{
            margin: "16px 0",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <p>
            <strong>Create Promotion</strong>
          </p>
          <form onSubmit={handleCreatePromotion}>
            <div>
              <label>Name</label>
              <br />
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
              <label>Type</label>
              <br />
              <select
                value={type}
                onChange={(e) => setType(e.target.value as PromotionType)}
              >
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed</option>
                <option value="bxgy">Buy X Get Y</option>
              </select>
            </div>

            <div>
              <label>Discount Value</label>
              <br />
              <input
                type="number"
                min={1}
                value={discountValue}
                onChange={(e) => setDiscountValue(Number(e.target.value))}
              />
            </div>

            <div>
              <label>Start Date</label>
              <br />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div>
              <label>End Date</label>
              <br />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div>
              <label>Category</label>
              <br />
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <button type="submit">Save</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

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
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {promotions.map((promo) => (
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
              <td style={tdStyle}>{formatDate(promo.startDate)}</td>
              <td style={tdStyle}>{formatDate(promo.endDate)}</td>
              <td style={tdStyle}>{formatDate(promo.updatedAt)}</td>
              <td style={tdStyle}>
                <button style={btnStyle} onClick={() => alert("TODO: View")}>
                  View
                </button>
                {""}
                <button style={btnStyle} onClick={() => alert("TODO: Edit")}>
                  Edit
                </button>
                {""}
                <button
                  style={btnDangerStyle}
                  onClick={() => alert("TODO: Deactivate")}
                >
                  Deactivate
                </button>
              </td>
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

const btnStyle: React.CSSProperties = {
  padding: "6px 10px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  background: "white",
  cursor: "pointer",
  fontSize: "12px",
};

const btnDangerStyle: React.CSSProperties = {
  ...btnStyle,
  borderColor: "#f0b3b3",
};
