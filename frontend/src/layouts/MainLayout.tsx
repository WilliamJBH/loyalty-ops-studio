import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#f2f2f2",
          padding: "20px",
          borderRight: "1px solid #ddd",
        }}
      >
        <h2>Loyalty Studio</h2>

        <nav>
          <p>
            <NavLink to="/">Dashboard</NavLink>
          </p>
          <p>
            <NavLink to="/promotions">Promotions</NavLink>
          </p>
          <p>
            <NavLink to="/simulator">Simulator</NavLink>
          </p>
          <p>
            <NavLink to="/metrics">Metrics</NavLink>
          </p>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}
