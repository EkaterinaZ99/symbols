'use strict'

import { Flex, Link, Grid, Box, Div } from 'smbls'



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
    Text_logo: { href: '/', text: 'Hello' },
    Text_about: { href: '/about', text: 'About' }
  },

  ThemeSwitcher: {},
  GridExample: {}
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


/**********GRID RELATED***********************/

const gridParameters = {
  rows: 15,
  cols: 15,
  gridcontainerId: 'grid'
}
export const gridCells =[];
 let cnt = 1;
    // Generate grid cells
    for (let row = 1; row < gridParameters.rows + 1; row++) {
      for (let col = 1; col < gridParameters.cols + 1; col++) {
       gridCells.push({col:col, row:row, cnt:cnt});
        cnt++;
      }
    }

export const GridExample = {
  //extends: Grid,   <==NOTE: when extend adds extra "cell" at the beginning of the grid(?)
  //props: {
  Grid: {
    id: 'grid',
    display: 'grid',
    columns: 'repeat(15, 50px)', //TODO: make repeat etc calculation dynamic
    gap: 'A',
    backgroundcolor: 'red',
    children: gridCells,
    childrenAs: 'state',
    onmouseup: (event, element, state) => { 
      let elements = document.getElementsByClassName("grid-item-blue");
      // Update output
      const elementsCnt = elements.length
      document.getElementById('totalselected').textContent = `Total cells selected: ${elementsCnt}`;  
      //document.getElementById('coordinates').textContent = `Selection coordinates: [${elements[elementsCnt - 1].col} , ${elements[elementsCnt - 1].row}]`; 
      document.getElementById('coordinates').textContent = `Selection coordinates (TODO: needs to be fixed): [${gridCells[elementsCnt - 1].col} , ${gridCells[elementsCnt - 1].row}]`; //TODO: FIX Counters (works in Vanilla)
     }, 
    childProps: (el, st) => ({
      tag: 'div',
      text: `[${st.col},${st.row}]`,
      class: 'grid-item',
      onmouseover: (event, element, state) => {
        Array.from(document.querySelectorAll('.grid-item')).forEach(node => {
          var nodePosition = node.getBoundingClientRect();
          if (nodePosition.x <= event.clientX && nodePosition.y <= event.clientY) {
            node.classList.add('grid-item-blue')
          }
          else {
            node.classList.remove('grid-item-blue')
          }
        })
      }
    }
    )
  }
}


