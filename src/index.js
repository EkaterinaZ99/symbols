'use strict'


import { create, Flex, Grid } from 'smbls'
import designSystem from './designSystem'
import * as components from './components'
import pages from './pages'

create(components.GridExample);

/*****************************************************************VANILLA VERSION ******************/

/*
  const gridParameters = {
  rows: 15,
  cols: 15,
  gridcontainerId: 'gridVanilla'
}

const elGrid = document.createElement('div');
elGrid.id = gridParameters.gridcontainerId;
elGrid.classList.add('grid');
document.body.appendChild(elGrid);  

 const grid = document.getElementById(gridParameters.gridcontainerId);
    const rows = gridParameters.rows;
    const cols = gridParameters.cols;
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

      document.getElementById(gridParameters.gridcontainerId).addEventListener("mouseover", function (event) {
      Array.from(this.querySelectorAll('.grid-item')).forEach(node => {
        var nodePosition = node.getBoundingClientRect();
        if (nodePosition.x <= event.clientX && nodePosition.y <= event.clientY) {https://avatars.githubusercontent.com/u/31938781?size=64
          node.classList.add('grid-item-blue')
        }
        else {
          node.classList.remove('grid-item-blue')
        }
      })
    });
   
    grid.addEventListener('mouseup', (event) => {
      let elements = document.getElementsByClassName("grid-item-blue");
      // Update output
      const elementsCnt = elements.length
      document.getElementById('totalselected').textContent = `Total cells selected: ${elementsCnt}`;
      document.getElementById('coordinates').textContent = `Selection coordinates: [${elements[elementsCnt - 1].dataset.col} , ${elements[elementsCnt - 1].dataset.row}]`;
    });
*/





 