import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectInventory
} from './inventorySlice';
import styles from './Inventory.module.css';

export function Counter() {
  const inventory = useSelector(selectInventory);
  const dispatch = useDispatch();

  return (
    <div>
      inventorycomponent
    </div>
  );
}
