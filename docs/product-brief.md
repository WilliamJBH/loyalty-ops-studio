# Loyalty Ops & Promotions Studio - Product Brief

## Problem

Retail marketing teams spend hours or days configuring promotions manually (2x1, percentage discounts, segmented offers).
Errors in rules can generate revenue loss, customer complaints, and urgent hotfixes before or during campaigns.

## Target Users

- **Marketing teams:** create and validate campaigns before going live.
- **QA / Release teams:** verify rules quickly to avoid production errors.
- **Business analysts:** simulate impact and estimate ROI per promotion.

## Solution

A web platform to **create, simulate, audit, and approve promotion rules** with a user-friendly interface and automated validations.

## Key Features (MVP)

- **Promotions CRUD**
    - Create, edit, activate/deactivate promotion rules (2x1, %, amount discount, etc.).
- **Simulator**
    - Upload a CSV with a mock ticket (sku, qty, price) and see:
        - Original total
        - Total with promotion
        - Savings
        - Which rules applied
- **Audit log**
    - Who created, edited, approved or deactivated a promotion, and when.
- **Approval flow**
    - Simple workflow: `draft -> approved`.
- **Metrics dashboard**
    - Active campaigns
    - Average discount per ticket (mock)
    - Number of simulations run
    - Basic error rate (rules rejected / total runs)

## KPIs

- **Configuration time:** reduce setup time from hours to minutes per promotion.
- **Error rate:** reduce misconfigured rules by at least 60% (using simulated data).
- **Adoption:** number of promotions simulated per week and per user.

## Business Impact

- Fewer configuration errors -> fewer revenue leaks and fewer emergency rollbacks.
- Faster promotion launches -> more agility for marketing and commercial teams.
- Clear audit trail -> better accountability and easier root-cause analisys.

## Technical Stack (MVP)

- **Frontend:** React + TypeScript, Vite, React Router, React Query.
- **Backend:** Node.js + Express (REST API).
- **Database:** PostgreSQL (promotions, users, audit logs).
- **DevOps / CI:** GitHub Actions (lint + test + build), deploy FE/BE to cloud (e.g. Vercel + Render/Railway).

## Next Steps (Stretch)

- Feature flags by country/store/segment.
- Rule rollbacks and version history.
- "What-if" simulations by customer segment or channel (e-commerce vs on-site store).