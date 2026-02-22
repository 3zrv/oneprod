export default function ScorpionIcon() {
  return (
    <svg className="scorp-svg" viewBox="0 0 380 380" style={{ width: '100%', height: '100%' }}>
      <defs>
        <filter id="scorpGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#scorpGlow)">
        {/* Left legs */}
        <g style={{ transformOrigin: '155px 240px', animation: 'legsWalk 2s ease-in-out infinite' }}>
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M148,240 L115,255 L95,275 L80,292" strokeWidth="1.5" opacity=".6" />
          <circle cx="115" cy="255" r="1.5" fill="var(--retro-amber)" opacity=".3" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M152,248 L122,268 L105,290 L92,308" strokeWidth="1.5" opacity=".6" />
          <circle cx="122" cy="268" r="1.5" fill="var(--retro-amber)" opacity=".3" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M158,255 L132,278 L118,302 L108,320" strokeWidth="1.5" opacity=".5" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M162,260 L140,285 L130,310 L122,330" strokeWidth="1.2" opacity=".4" />
        </g>
        {/* Right legs */}
        <g style={{ transformOrigin: '225px 240px', animation: 'legsWalk 2s ease-in-out .3s infinite' }}>
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M232,240 L265,255 L285,275 L300,292" strokeWidth="1.5" opacity=".6" />
          <circle cx="265" cy="255" r="1.5" fill="var(--retro-amber)" opacity=".3" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M228,248 L258,268 L275,290 L288,308" strokeWidth="1.5" opacity=".6" />
          <circle cx="258" cy="268" r="1.5" fill="var(--retro-amber)" opacity=".3" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M222,255 L248,278 L262,302 L272,320" strokeWidth="1.5" opacity=".5" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M218,260 L240,285 L250,310 L258,330" strokeWidth="1.2" opacity=".4" />
        </g>
        {/* Body */}
        <ellipse fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" cx="190" cy="260" rx="48" ry="30" strokeWidth="1.5" />
        <ellipse cx="190" cy="260" rx="38" ry="22" fill="none" stroke="var(--retro-amber)" strokeWidth=".5" opacity=".2" />
        <path d="M155,248 Q190,242 225,248" fill="none" stroke="var(--retro-amber)" strokeWidth=".6" opacity=".25" />
        <path d="M150,258 Q190,252 230,258" fill="none" stroke="var(--retro-amber)" strokeWidth=".6" opacity=".2" />
        <path d="M152,268 Q190,262 228,268" fill="none" stroke="var(--retro-amber)" strokeWidth=".6" opacity=".2" />
        {/* Mid section */}
        <ellipse fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" cx="190" cy="228" rx="40" ry="26" strokeWidth="1.5" />
        <ellipse cx="190" cy="228" rx="30" ry="18" fill="none" stroke="var(--retro-amber)" strokeWidth=".5" opacity=".15" />
        {/* Head */}
        <ellipse fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" cx="190" cy="205" rx="28" ry="18" strokeWidth="1.5" />
        <circle cx="183" cy="198" r="3" fill="var(--fire2)" opacity=".9" />
        <circle cx="197" cy="198" r="3" fill="var(--fire2)" opacity=".9" />
        <circle cx="183" cy="198" r="1.5" fill="var(--fire3)" />
        <circle cx="197" cy="198" r="1.5" fill="var(--fire3)" />
        <circle cx="170" cy="202" r="1.5" fill="var(--retro-amber)" opacity=".5" />
        <circle cx="210" cy="202" r="1.5" fill="var(--retro-amber)" opacity=".5" />
        {/* Tail */}
        <g style={{ transformOrigin: '190px 200px', animation: 'scorpTail 3s ease-in-out infinite' }}>
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M190,232 L190,210" strokeWidth="4" />
          <ellipse cx="190" cy="210" rx="8" ry="6" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M190,204 L185,182" strokeWidth="3.5" />
          <ellipse cx="185" cy="182" rx="7.5" ry="5.5" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M185,176 L178,156" strokeWidth="3" />
          <ellipse cx="178" cy="156" rx="7" ry="5" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M178,151 L168,132" strokeWidth="2.8" />
          <ellipse cx="168" cy="132" rx="6.5" ry="4.5" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M168,128 L158,108 Q152,95 148,80" strokeWidth="2.5" />
          <ellipse cx="155" cy="100" rx="5.5" ry="4" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          {/* Stinger */}
          <g style={{ transformOrigin: '148px 38px', animation: 'scorpSting 3s ease-in-out infinite' }}>
            <ellipse cx="148" cy="72" rx="8" ry="10" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1.5" />
            <ellipse cx="148" cy="72" rx="5" ry="7" fill="none" stroke="var(--retro-amber)" strokeWidth=".5" opacity=".3" />
            <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M148,62 L146,42 Q145,36 148,32" strokeWidth="2.5" />
            <circle cx="148" cy="32" r="2" fill="var(--fire1)" opacity=".9" />
            <circle cx="148" cy="32" r="4" fill="var(--fire1)" opacity=".15" />
            <circle cx="148" cy="28" r="1.2" fill="var(--fire3)" opacity=".7">
              <animate attributeName="opacity" values=".7;.2;.7" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
        {/* Left claw */}
        <g style={{ transformOrigin: '110px 155px', animation: 'clawL 4s ease-in-out infinite' }}>
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M165,215 L130,185 L105,165" strokeWidth="2.5" />
          <circle cx="130" cy="185" r="3" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M105,165 L80,148" strokeWidth="2.2" />
          <path fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" d="M80,148 Q65,135 55,125 Q50,120 52,128 L65,145 Q72,150 80,148" strokeWidth="1.5" />
          <path fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" d="M80,148 Q68,155 58,150 Q48,145 45,138 Q43,133 50,130" strokeWidth="1.5" />
          <path d="M60,130 L58,133 L63,135" fill="none" stroke="var(--retro-amber)" strokeWidth=".5" opacity=".4" />
          <path d="M55,126 L53,129 L57,131" fill="none" stroke="var(--retro-amber)" strokeWidth=".5" opacity=".4" />
        </g>
        {/* Right claw */}
        <g style={{ transformOrigin: '270px 155px', animation: 'clawR 4s ease-in-out .5s infinite' }}>
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M215,215 L250,185 L275,165" strokeWidth="2.5" />
          <circle cx="250" cy="185" r="3" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M275,165 L300,148" strokeWidth="2.2" />
          <path fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" d="M300,148 Q315,135 325,125 Q330,120 328,128 L315,145 Q308,150 300,148" strokeWidth="1.5" />
          <path fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" d="M300,148 Q312,155 322,150 Q332,145 335,138 Q337,133 330,130" strokeWidth="1.5" />
          <path d="M320,130 L322,133 L317,135" fill="none" stroke="var(--retro-amber)" strokeWidth=".5" opacity=".4" />
          <path d="M325,126 L327,129 L323,131" fill="none" stroke="var(--retro-amber)" strokeWidth=".5" opacity=".4" />
        </g>
        {/* Mandibles */}
        <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M185,192 L180,184 L183,188" strokeWidth="1" opacity=".5" />
        <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M195,192 L200,184 L197,188" strokeWidth="1" opacity=".5" />
      </g>
    </svg>
  )
}
