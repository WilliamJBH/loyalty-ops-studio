export type PromotionStatus = "draft" | "approved" | "inactive";

export type PromotionType = "percentage" | "fixed" | "bxgy"; // buy X get Y

export interface Promotion {
  id: string;
  name: string;
  status: PromotionStatus;
  type: PromotionType;
  discountValue: number; // 10 = 10%, 100 = 100%
  minTicketAmount?: number; // optional
  category?: string; // optional
  startDate: string; // ISO String
  endDate: string; // ISO String
  createdBy: string;
  updatedAt: string; // ISO String
}
