export default function SniperIcon() {
  return (
    <svg className="sniper-svg" viewBox="0 0 380 380" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <filter id="sniperGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#sniperGlow)">
        {/* Main rifle group */}
        <g style={{ animation: 'sniperRecoil 4s ease-out infinite' }}>
          {/* Barrel */}
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="40" y1="175" x2="165" y2="175" strokeWidth="3.5" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="40" y1="175" x2="165" y2="175" strokeWidth="1" opacity=".3" strokeDasharray="2,6" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="80" y1="171" x2="80" y2="179" strokeWidth=".5" opacity=".2" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="100" y1="171" x2="100" y2="179" strokeWidth=".5" opacity=".2" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="120" y1="171" x2="120" y2="179" strokeWidth=".5" opacity=".2" />
          {/* Suppressor */}
          <rect x="30" y="168" width="18" height="14" rx="2" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1.8" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="35" y1="168" x2="35" y2="182" strokeWidth=".6" opacity=".3" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="39" y1="168" x2="39" y2="182" strokeWidth=".6" opacity=".3" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="43" y1="168" x2="43" y2="182" strokeWidth=".6" opacity=".3" />
          <rect x="32" y="170" width="3" height="2" rx=".5" fill="var(--retro-amber)" opacity=".3" />
          <rect x="32" y="178" width="3" height="2" rx=".5" fill="var(--retro-amber)" opacity=".3" />
          {/* Receiver */}
          <path fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" d="M155,160 L280,160 L285,165 L285,185 L280,190 L155,190 Z" strokeWidth="2" />
          {/* Rail marks */}
          <g opacity=".25">
            <rect x="160" y="158" width="4" height="3" fill="var(--retro-amber)" />
            <rect x="167" y="158" width="4" height="3" fill="var(--retro-amber)" />
            <rect x="174" y="158" width="4" height="3" fill="var(--retro-amber)" />
            <rect x="181" y="158" width="4" height="3" fill="var(--retro-amber)" />
            <rect x="188" y="158" width="4" height="3" fill="var(--retro-amber)" />
          </g>
          {/* Ejection port */}
          <rect x="210" y="162" width="18" height="8" rx="1" fill="none" stroke="var(--retro-amber)" strokeWidth=".8" opacity=".4" />
          {/* Bolt */}
          <g style={{ transformOrigin: '218px 140px', animation: 'boltCycle 4s ease-in-out infinite' }}>
            <rect x="217" y="148" width="6" height="14" rx="2" fill="var(--retro-amber)" opacity=".6" />
            <line x1="220" y1="148" x2="220" y2="140" stroke="var(--retro-amber)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="220" cy="139" r="3" fill="none" stroke="var(--retro-amber)" strokeWidth="1" opacity=".4" />
          </g>
          {/* Magazine */}
          <path fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" d="M200,190 L200,232 Q200,236 204,236 L222,236 Q226,236 226,232 L226,190" strokeWidth="1.8" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="200" y1="202" x2="226" y2="202" strokeWidth=".5" opacity=".2" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="200" y1="212" x2="226" y2="212" strokeWidth=".5" opacity=".2" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="200" y1="222" x2="226" y2="222" strokeWidth=".5" opacity=".2" />
          <rect x="198" y="234" width="30" height="4" rx="1" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          {/* Stock */}
          <path fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" d="M280,160 L330,156 Q345,158 348,170 L348,180 Q345,192 330,194 L280,190 Z" strokeWidth="2" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="300" y1="162" x2="300" y2="188" strokeWidth=".4" opacity=".2" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="310" y1="160" x2="310" y2="190" strokeWidth=".4" opacity=".2" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="320" y1="158" x2="320" y2="192" strokeWidth=".4" opacity=".2" />
          <path d="M295,156 Q310,148 340,153" fill="none" stroke="var(--retro-amber)" strokeWidth="1.5" opacity=".4" />
          {/* Buttpad */}
          <path fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" d="M345,158 L352,160 L352,190 L345,192" strokeWidth="1.5" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="349" y1="165" x2="349" y2="185" strokeWidth=".5" opacity=".3" />
          {/* Scope */}
          <rect x="138" y="135" width="80" height="24" rx="12" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="2" />
          <circle cx="148" cy="147" r="10" fill="none" stroke="var(--retro-amber)" strokeWidth="2" />
          <circle cx="148" cy="147" r="7" fill="none" stroke="var(--retro-amber)" strokeWidth=".8" opacity=".3" />
          <circle cx="148" cy="147" r="4" fill="rgba(232,167,53,.05)" stroke="var(--retro-amber)" strokeWidth=".5" opacity=".4" />
          <line x1="142" y1="147" x2="154" y2="147" stroke="var(--fire2)" strokeWidth=".7" opacity=".6" />
          <line x1="148" y1="141" x2="148" y2="153" stroke="var(--fire2)" strokeWidth=".7" opacity=".6" />
          {/* Scope glint */}
          <circle cx="148" cy="147" r="7" fill="var(--fire2)" opacity="0" style={{ animation: 'sGlint 5s ease-in-out infinite' }} />
          <circle cx="210" cy="147" r="7" fill="none" stroke="var(--retro-amber)" strokeWidth="1.5" />
          {/* Scope knobs */}
          <rect x="172" y="128" width="10" height="7" rx="2" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          <line x1="177" y1="128" x2="177" y2="125" stroke="var(--retro-amber)" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="185" y="128" width="10" height="7" rx="2" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1" />
          <line x1="190" y1="128" x2="190" y2="125" stroke="var(--retro-amber)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Scope rings */}
          <rect x="158" y="153" width="12" height="7" rx="1.5" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1.2" />
          <rect x="192" y="153" width="12" height="7" rx="1.5" fill="rgba(232, 167, 53, .04)" stroke="var(--retro-amber)" strokeLinejoin="round" strokeWidth="1.2" />
          {/* Bipod */}
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="120" y1="190" x2="100" y2="248" strokeWidth="2" />
          <line fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" x1="135" y1="190" x2="155" y2="248" strokeWidth="2" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M94,248 L106,248" strokeWidth="2.5" />
          <path fill="none" stroke="var(--retro-amber)" strokeLinecap="round" strokeLinejoin="round" d="M149,248 L161,248" strokeWidth="2.5" />
          <circle cx="127" cy="192" r="3" fill="none" stroke="var(--retro-amber)" strokeWidth="1" opacity=".5" />
          {/* Trigger guard */}
          <path d="M240,190 Q240,210 252,210 Q260,210 260,190" fill="none" stroke="var(--retro-amber)" strokeWidth="1.8" />
          <line x1="248" y1="190" x2="252" y2="206" stroke="var(--retro-amber)" strokeWidth="1.5" />
          <circle cx="290" cy="192" r="3" fill="none" stroke="var(--retro-amber)" strokeWidth="1" opacity=".4" />
        </g>
        {/* Bullet casings */}
        <g style={{ transformOrigin: '218px 155px', opacity: 0, animation: 'casingEject 4s ease-out infinite' }}>
          <rect x="215" y="148" width="7" height="14" rx="2" fill="var(--fire2)" />
          <ellipse cx="218.5" cy="148" rx="3.5" ry="2" fill="var(--fire3)" opacity=".8" />
        </g>
        <g style={{ transformOrigin: '220px 152px', opacity: 0, animation: 'casingEject 4s ease-out .12s infinite' }}>
          <rect x="217" y="146" width="6" height="12" rx="2" fill="var(--fire2)" opacity=".7" />
          <ellipse cx="220" cy="146" rx="3" ry="1.5" fill="var(--fire3)" opacity=".6" />
        </g>
        {/* Muzzle flash */}
        <g style={{ transformOrigin: '38px 175px', opacity: 0, animation: 'mFlash 4s ease-out infinite' }}>
          <polygon points="38,175 10,162 18,175 10,188" fill="var(--fire2)" opacity=".7" />
          <polygon points="38,175 5,166 15,175 5,184" fill="var(--fire3)" opacity=".4" />
          <circle cx="30" cy="175" r="12" fill="var(--fire1)" opacity=".12" />
        </g>
        {/* Smoke */}
        <circle cx="38" cy="170" r="4" fill="var(--retro-amber)" opacity="0" style={{ transformOrigin: '38px 170px', animation: 'smokeRise 4s ease-out infinite' }} />
        <circle cx="42" cy="168" r="3" fill="var(--retro-amber)" opacity="0" style={{ animationDelay: '.3s', transformOrigin: '42px 168px', animation: 'smokeRise 4s ease-out .3s infinite' }} />
      </g>
    </svg>
  )
}
