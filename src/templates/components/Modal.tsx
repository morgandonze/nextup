import * as React from 'react';
import { View } from 'react-native-web';
import Link from 'next/link';

const MODAL = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#111',
  opacity: 0.94,
  width: '100%',
  flex: 1,
  height: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: 150,
};

const MODAL_ITEM_TEXT = {
  color: '#ddd',
  fontFamily: 'Crimson Text',
  fontWeight: 900,
  fontSize: 32,
  textDecoration: 'none',
};

const MODAL_ITEM = {
  marginBottom: 60,
};

export default function modal({ setMenuOpen }) {
  return (
    <View style={MODAL} onClick={() => setMenuOpen(false)}>
      <View style={MODAL_ITEM}>
        <Link href="/">
          <a style={MODAL_ITEM_TEXT}>Home</a>
        </Link>
      </View>
    </View>
  );
}
