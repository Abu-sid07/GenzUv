import { useState } from 'react'
import './ProjectShowcase.scss'

const tabs = [
  { id: 'macro', label: 'Frame A: Macro Map' },
  { id: 'expansion', label: 'Frame B: Expansion 2x' },
  { id: 'immersion', label: 'Frame C: Full Immersion' },
]

const placeholders = [
  { id: 'a1', label: '[REAL PROJECT SCREENSHOT A, CROP 1]' },
  { id: 'b1', label: '[REAL PROJECT SCREENSHOT B, CROP 1]' },
  { id: 'c1', label: '[REAL PROJECT SCREENSHOT C, CROP 1]' },
  { id: 'd1', label: '[REAL PROJECT SCREENSHOT D, CROP 1]' },
  { id: 'e1', label: '[REAL PROJECT SCREENSHOT E, CROP 1]' },
  { id: 'e2', label: '[REAL PROJECT SCREENSHOT E, CROP 2]' },
  { id: 'b2', label: '[REAL PROJECT SCREENSHOT B, CROP 2]' },
]

function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState('macro')

  return (
    <section className="showcase" id="showcase">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">Multi-Stage Zoom Parallax Concept</h2>
          <div className="showcase-tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`showcase-tab ${activeTab === tab.id ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="showcase-grid">
          {/* Left column */}
          <div className="showcase-side showcase-side--left">
            <div className="showcase-frame showcase-frame--small">
              <span className="showcase-placeholder">{placeholders[0].label}</span>
            </div>
            <div className="showcase-frame showcase-frame--small">
              <span className="showcase-placeholder">{placeholders[2].label}</span>
            </div>
          </div>

          {/* Center – main showcase */}
          <div className="showcase-center">
            <div className="showcase-frame showcase-frame--main">
              <div className="showcase-frame-header">
                <span className="showcase-badge">CORE PLATFORM CANVAS</span>
                <span className="showcase-gear" aria-hidden="true">⚙</span>
              </div>
              <div className="showcase-frame-body">
                <span className="showcase-placeholder">[Real project central showcase screenshot]</span>
              </div>
              <div className="showcase-frame-footer">
                <span>WhatsApp Lead Engine Interface</span>
                <span className="showcase-status">Active Pipeline</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="showcase-side showcase-side--right">
            <div className="showcase-frame showcase-frame--small">
              <span className="showcase-placeholder">{placeholders[1].label}</span>
            </div>
            <div className="showcase-frame showcase-frame--small">
              <span className="showcase-placeholder">{placeholders[3].label}</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="showcase-bottom">
          <div className="showcase-frame showcase-frame--small">
            <span className="showcase-placeholder">{placeholders[4].label}</span>
          </div>
          <div className="showcase-frame showcase-frame--small">
            <span className="showcase-placeholder">{placeholders[5].label}</span>
          </div>
          <div className="showcase-frame showcase-frame--small">
            <span className="showcase-placeholder">{placeholders[6].label}</span>
          </div>
        </div>

        <div className="showcase-devnote">
          <span className="showcase-devnote-dot" aria-hidden="true" />
          DEV HANDOFF: SCROLL HOOKED (0% → 100%)
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
