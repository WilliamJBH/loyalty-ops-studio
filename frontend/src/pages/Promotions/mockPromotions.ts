import type { Promotion } from "./types";

export const mockPromotions: Promotion[] = [
  {
    id: "PROMO-001",
    name: "10% OFF Electrónica Ticket mayor o igual a $1,500",
    status: "approved",
    type: "percentage",
    discountValue: 10,
    minTicketAmount: 1500,
    category: "electronics",
    startDate: "2025-11-10",
    endDate: "2025-11-20",
    createdBy: "ana.mkt",
    updatedAt: "2025-11-09T12:34:00Z",
  },
  {
    id: "PROMO-002",
    name: "2x1 en Juguetes Navidad",
    status: "draft",
    type: "bxgy",
    discountValue: 100, // lo afinaremos después, aquí solo es placeholder
    category: "toys",
    startDate: "2025-12-20",
    endDate: "2025-12-26",
    createdBy: "carlos.mkt",
    updatedAt: "2025-11-15T09:10:00Z",
  },
  {
    id: "PROMO-003",
    name: "$150 OFF en Moda Ticket ≥ 1000",
    status: "inactive",
    type: "fixed",
    discountValue: 150,
    minTicketAmount: 1000,
    category: "fashion",
    startDate: "2025-09-01",
    endDate: "2025-09-30",
    createdBy: "sofia.mkt",
    updatedAt: "2025-10-01T08:00:00Z",
  },
];
