interface SniperIconProps {
  firing?: boolean
}

export default function SniperIcon({ firing: _firing = false }: SniperIconProps) {
  return (
    <img
      src="/sniper.gif"
      alt="Sniper"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        filter: 'invert(1)',
      }}
    />
  )
}
