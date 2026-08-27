import type { ProjectVisual as ProjectVisualType } from "@/data/portfolio";

function OperationsVisual() {
  return (
    <div className="operations-visual">
      <div className="operations-sidebar"><b>p24</b>{[1, 2, 3, 4].map((item) => <i key={item} />)}</div>
      <div className="operations-content">
        <div className="visual-toolbar"><span>Service operations</span><i /></div>
        <div className="operations-metrics">
          <span><b>REST</b><small>Secure APIs</small></span>
          <span><b>RBAC</b><small>Role workflows</small></span>
        </div>
        <div className="operations-chart">{[34, 57, 46, 78, 63, 91, 74].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
      </div>
    </div>
  );
}

function LayersVisual() {
  return (
    <div className="layers-visual">
      <div className="visual-toolbar"><span>Application layers</span><small>Connected</small></div>
      <div className="layer-list">
        {["React interface", "Node services", "SQL + NoSQL"].map((layer, index) => (
          <div key={layer}><i>0{index + 1}</i><b>{layer}</b><span /></div>
        ))}
      </div>
    </div>
  );
}

function BoardVisual() {
  return (
    <div className="board-visual">
      {["To do", "Building", "Done"].map((column, columnIndex) => (
        <div className="board-column" key={column}>
          <b>{column}</b>
          <i className={columnIndex === 1 ? "is-active" : ""} />
          <i />
        </div>
      ))}
    </div>
  );
}

export function ProjectVisual({ type }: { type: ProjectVisualType }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      {type === "operations" ? <OperationsVisual /> : null}
      {type === "layers" ? <LayersVisual /> : null}
      {type === "board" ? <BoardVisual /> : null}
    </div>
  );
}
