'use strict'

import { Flex, Link, Grid, Box} from 'smbls'

export const Header = {
  extend: Flex,
  props: {
    minWidth: '100%',
    padding: 'Z B',
    align: 'center space-between'
  },

  Flex: {
    props: { gap: 'C' },
    childExtend: {
      extend: Link,
      props: ({ props }) => ({
        textDecoration: window.location.pathname === props.href ? 'underline' : 'none'
      })
    },
    Text_logo: { href: '/', text: 'Hello!2222' },
    Text_about: { href: '/about', text: 'About' }
  },

  ThemeSwitcher: {},
  GridExample:{}
}

export const ThemeSwitcher = {
  extend: Flex,
  props: { gap: 'A2' },
  childExtend: {
    props: (element, state) => ({
      active: state.globalTheme === element.key,
      cursor: 'pointer',
      '.active': {
        fontWeight: '900'
      }
    }),
    on: {
      click: (event, element, state) => {
        state.update({ globalTheme: element.key })
      }
    }
  },
  dark: { text: 'Dark' },
  light: { text: 'Light' },
  midnight: { text: 'Midnight' }
}

export const Footer = {
  props: {
    padding: 'Z B',
    order: 9
  }
}

export const videos = [
  {
    title: 'Organize and review libraries',
    src: 'https://www.youtube.com/embed/5qo-zLDQdG0'
  },
  {
    title: 'Publish to production',
    src: 'https://www.youtube.com/embed/bXtvyqEC8Fo'
  },
  {
    title: 'Documentation tools',
    src: 'https://www.youtube.com/embed/llcDv3OvIw4'
  },
  {
    title: 'Organize and review libraries',
    src: 'https://www.youtube.com/embed/5qo-zLDQdG0'
  },
  {
    title: 'Publish to production',
    src: 'https://www.youtube.com/embed/bXtvyqEC8Fo'
  },
  {
    title: 'Documentation tools',
    src: 'https://www.youtube.com/embed/llcDv3OvIw4'
  }
]

/*export const GridExample = {
  Grid: {
    columns: '1fr 2fr',
    gap: 'B',
    children: videos,
    childrenAs: 'state',
    childProps: (el, st) => ({
      Div: { // represents GridItem element
        H6: {
          text: st.title
        },
        Iframe: {
          src: st.src,
        }
      }
    })
  }
}*/

export const GridItem = {
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  background: 'lightgray'
}

export const gridCells = [];
for (let i=0; i<25; i++) {
  gridCells.push({
    ...GridItem
  });
}

export const GridItemSelected = {
    background: 'lightblue'
}

export const GridExample = {
  Grid: {
    columns: '1fr 2fr',
    gap: 'B',
    children: videos,
    childrenAs: 'state',
    childProps: (el, st) => ({
      Div: { // represents GridItem element
        H6: {
          text: st.title
        },
        Iframe: {
          src: st.src,
        }
      }
    })
  }
}
export const GridExample1 = {
  Grid: {
    columns: 'repeat(5, 50px)',
    'grid-template-columns': 'repeat(5, 50px)',
    'grid-template-rows': 'repeat(5, 50px)',
    gap: 'B',
    children: videos,
    childrenAs: 'state',
    childProps: (el, st) => ({
      Div: { // represents GridItem element
        H6: {
          text: st.title
        },
        Iframe: {
          src: st.src,
        }
      }
    })
  }
}