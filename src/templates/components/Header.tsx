import { Text, View, ViewStyle } from 'react-native-web';
import Link from 'next/link';
import * as React from 'react';
import Head from 'next/head';
import palette from './palette';

const HEADER_CONTAINER = (): ViewStyle => ({
  paddingHorizontal: 18,
  paddingTop: 20,
  marginBottom: 30,
});

const HEADER_TOP = (): ViewStyle => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const BUN_WRAPPER = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
};

const BUN = {
  backgroundColor: '#ddd',
  height: 1,
  width: 18,
  marginBottom: 4,
};

const ROW_NAV_WRAPPER = {
  flexDirection: 'row',
};

const NAV_ITEM = {
  marginRight: 12,
};
const NAV_ITEM_TEXT = {
  color: '#ddd',
  fontFamily: 'Crimson Text',
  fontWeight: 900,
  fontSize: 24,
  textDecoration: 'none',
};

const bunMenu = (menuOpen, setMenuOpen) => (
  <View style={BUN_WRAPPER} onClick={() => setMenuOpen(!menuOpen)}>
    <View style={BUN} />
    <View style={BUN} />
    <View style={BUN} />
  </View>
);

const rowMenu = () => (
  <View style={ROW_NAV_WRAPPER}>
    <View style={NAV_ITEM}>
      <Link href="/">
        <a style={NAV_ITEM_TEXT}>Home</a>
      </Link>
    </View>
  </View>
);

export default function Header({ size, menuOpen, setMenuOpen }) {
  return (
    <View style={HEADER_CONTAINER()}>
      <View style={HEADER_TOP()}>
        <Link href="/">
          <a
            style={{
              fontSize: [34, 40, 46, 52, 58][size],
              color: palette.primary,
              fontFamily: 'Crimson Text',
              textDecoration: 'none',
            }}
          >
            Hello Nextup.js!
          </a>
        </Link>
        {size <= 1 && bunMenu(menuOpen, setMenuOpen)}
      </View>

      {size > 1 && rowMenu()}

      <div>
        <Head>
          <link
            href={
              'https://fonts.googleapis.com/css?family=Karla:300,900|Lora:300,900|Lato:300,900|Crimson+Text:400,400i,600,600i&display=swap'
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
          div#__next > div {
            height: 100%;
          }

          * {
            color: rgb(230, 230, 230);
            font-family: Lato;
          }

          body {
            color: ${palette.background};
          }
        `}</style>
      </div>
    </View>
  );
}
