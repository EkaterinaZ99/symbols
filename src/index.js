'use strict'

import { create, Flex, Grid } from 'smbls'
import DOM  from 'smbls'
import designSystem from './designSystem'
import * as components from './components'
import pages from './pages'
/*TODO: wrap up in component (seperate script aka GridSelection.js)where create document elements with DOMQL
atomic element would be extention from Div (selected and not selected => difference in bg color) with extra properties to hold col/row/cnt 
pass X,Y and calculate with accordingly
add error handling
FIGRE OUT: how to pass mouseup? event via property to the component?
*/
    const grid = document.getElementById('grid');
    const rows = 15;
    const cols = 15;
    let cnt = 1;
    // Generate grid cells
    for (let row = 1; row < rows + 1; row++) {
      for (let col = 1; col < cols + 1; col++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.dataset.cnt = cnt;
        cell.textContent = `[${col},${row}]`;
        grid.appendChild(cell);
        cnt++;
      }
    }
//Add footer with counters:
/*
const footerRow= document.createElement('div');
footerRow.classList.add('grid-footer');
const footerCell1 = document.createElement('div');
footerCell1.id = 'totalselected';
footerCell1.textContent = 'Total cells selected123: 0';
footerRow.appendChild(footerCell1); 


const footerCell2 = document.createElement('div');
footerCell2.id = 'coordinates';
footerCell2.innerText = 'Selected Cells: 0';
footerRow.appendChild(footerCell2); 

grid.appendChild(footerRow);   
*/

    document.querySelector('.grid').addEventListener("mouseover", function (event) {
      Array.from(this.querySelectorAll('.grid-item')).forEach(node => {
        var nodePosition = node.getBoundingClientRect();
        if (nodePosition.x <= event.clientX && nodePosition.y <= event.clientY) {
          node.classList.add('grid-item-blue')
        }
        else {
          node.classList.remove('grid-item-blue')
        }
      })
    });

    // Add click event listener to the grid
    grid.addEventListener('mouseup', (event) => {
      let elements = document.getElementsByClassName("grid-item-blue");
      // Update output
      const elementsCnt = elements.length
      document.getElementById('totalselected').textContent = `Total cells selected: ${elementsCnt}`;
      document.getElementById('coordinates').textContent = `Selection coordinates: ${elements[elementsCnt - 1].dataset.col} , ${elements[elementsCnt - 1].dataset.row}`;
    });


/*create({
  extend: Flex,

  props: {
    theme: 'document',
    flow: 'column',
    height: '100vh',
    align: 'center space-between'
  },

  Header: { text:'asdasdasd'},
  content: { text: 'asdsadsadfsfadsfasffdsdsadas' },
  Footer: { text: 'Footer123' }
}, {
  designSystem,
  components,
  pages
})
*/
/*create(  components.GridExample1,
  designSystem,
  components,
  pages
)
*/

 