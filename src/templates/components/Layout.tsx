import * as React from 'react'
import { View, ViewStyle, ScrollView } from 'react-native-web'
import Header from '../components/Header'
import Modal from '../components/Modal'
import palette from './palette'

const ROOT = {
  backgroundColor: palette.background,
  height: '100%'
}

const CENTERED = {
  marginHorizontal: 'auto',
  width: '60%'
}

const FULL = {
  paddingHorizontal: 20
}

const CONTAINER = (size: number): ViewStyle => ({
  display: 'flex',
  flexDirection: 'column',
  ...(size > 2 ? CENTERED : FULL)
})

const BODY = (): ViewStyle => ({})

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const isClient = typeof window === 'object'
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }
  const [size, setSize] = React.useState(3)

  React.useEffect(() => {
    function handleResize() {
      const width = getSize().width
      const size =
        width > 576 && width <= 768
          ? 1
          : width > 768 && width <= 992
          ? 2
          : width > 992 && width <= 1200
          ? 3
          : width > 1200
          ? 4
          : 0

      setSize(size)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <View style={ROOT}>
      <ScrollView style={CONTAINER(size)}>
        <Header size={size} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <View style={BODY()}>{children}</View>
      </ScrollView>

      {menuOpen && <Modal setMenuOpen={setMenuOpen} />}
    </View>
  )
}
