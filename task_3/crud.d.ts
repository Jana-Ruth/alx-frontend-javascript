// task_3/js/crud.d.ts

// import { RowID, RowElement } from '../interface';
import {RowID, RowElement} from '../task_3/interface'
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
