import * as React from 'react'
import { Text, View, ViewStyle } from 'react-native-web'
import { useMediaPredicate } from 'react-media-hook'
import Head from 'next/head'

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

const HEADER_CONTAINER = (size: number): ViewStyle => ({
  backgroundColor: '#ffd34d',
  paddingHorizontal: 18,
  paddingVertical: 20
})

const HEADER_TOP = (size: number): ViewStyle => ({
  flexDirection: 'row',
  justifyContent: 'space-between'
})

const BODY = (size: number): ViewStyle => ({})

const BUN_WRAPPER = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
}

const BUN = {
  backgroundColor: '#333',
  height: 3,
  width: 26,
  marginBottom: 2
}

const ROW_NAV_WRAPPER = {
  flexDirection: 'row'
}

const NAV_ITEM = {
  marginRight: 12
}

const MODAL = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#111',
  opacity: 0.97,
  width: '100%',
  flex: 1,
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
}

const MODAL_ITEMS = {}

const MODAL_ITEM_TEXT = {
  color: 'white'
}

const MODAL_ITEM = {
  marginBottom: 18
}

const lorem = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dictum
      risus. Nulla sit amet maximus elit, at placerat massa. Fusce tempus non
      orci sed accumsan. Vestibulum consectetur, erat non placerat ultricies,
      eros arcu rhoncus lorem, at scelerisque ipsum erat sed enim. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Maecenas laoreet metus ut
      ligula pellentesque, id aliquam neque finibus. Mauris imperdiet turpis id
      turpis ornare venenatis. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia Curae; Proin vitae tempor massa, non
      cursus leo. In
    </p>

    <p>
      neque augue, sodales vitae hendrerit at, gravida eleifend velit. Nulla
      dapibus euismod felis, quis volutpat tellus rhoncus non. Donec odio metus,
      lacinia in varius tristique, interdum non orci. Nam sollicitudin tempor
      velit. Curabitur ut mi viverra, vestibulum ligula quis, varius turpis.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Donec non congue nulla. Etiam elementum, odio non
      venenatis convallis, felis leo eleifend lacus, a scelerisque metus diam
      sed neque. Curabitur vel sagittis risus. Morbi at purus ac nisi volutpat
      ultrices. Duis vel scelerisque metus. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </>
)

const head = () => (
  <div>
    <Head>
      <link
        href={
          'https://fonts.googleapis.com/css?family=Karla|Lora|Lato:300&display=swap'
        }
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div {
        height: 100%;
      }

      body {
        font-family: 'Lato';
        color: #efefef;
      }
    `}</style>
  </div>
)

const bunMenu = () => (
  <View style={BUN_WRAPPER}>
    <View style={BUN} />
    <View style={BUN} />
    <View style={BUN} />
  </View>
)

const rowMenu = () => (
  <View style={ROW_NAV_WRAPPER}>
    <View style={NAV_ITEM}>
      <Text>Home</Text>
    </View>
    <View style={NAV_ITEM}>
      <Text>Home</Text>
    </View>
    <View style={NAV_ITEM}>
      <Text>Home</Text>
    </View>
  </View>
)

const modal = () => (
  <View style={MODAL}>
    <View style={MODAL_ITEMS}>
      <View style={MODAL_ITEM}>
        <Text style={MODAL_ITEM_TEXT}>ITEM</Text>
      </View>

      <View style={MODAL_ITEM}>
        <Text style={MODAL_ITEM_TEXT}>ITEM</Text>
      </View>

      <View style={MODAL_ITEM}>
        <Text style={MODAL_ITEM_TEXT}>ITEM</Text>
      </View>
    </View>
  </View>
)

export default function Index() {
  const smallSize = useMediaPredicate('(min-width: 576px)')
  const mediumSize = useMediaPredicate('(min-width: 768px)')
  const largeSize = useMediaPredicate('(min-width: 992px)')
  const extraLargeSize = useMediaPredicate('(min-width: 1200px)')
  const size = smallSize + mediumSize + largeSize + extraLargeSize

  return (
    <View style={CONTAINER(size)}>
      {head()}
      <View style={HEADER_CONTAINER(size)}>
        <View style={HEADER_TOP(size)}>
          <Text style={{ fontSize: (1 + size) * 10 + 20 }}>Title</Text>
          {size <= 1 && bunMenu()}
        </View>

        {size > 1 && rowMenu()}
      </View>

      <View style={BODY(size)}>
        <Text style={{ fontSize: (1 + size) * 2 + 14 }}>{lorem()}</Text>
      </View>

      {false && modal()}
    </View>
  )
}
