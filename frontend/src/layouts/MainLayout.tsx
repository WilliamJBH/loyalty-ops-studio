import type { ReactNode } from "react";

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
            <a href="/">Dashboard</a>
          </p>
          <p>
            <a href="/promotions">Promotions</a>
          </p>
          <p>
            <a href="/simulator">Simulator</a>
          </p>
          <p>
            <a href="/metrics">Metrics</a>
          </p>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}
