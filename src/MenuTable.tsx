import * as React from "react";
import {MenuItem} from "./entity/MenuItem";
import {IconButton, Table, TableBody, TableCell, TableFooter, TableHead, TableRow} from "@material-ui/core";
import {useState} from "react";
import {Add, Remove} from "@material-ui/icons";

interface IMenuTableProps {
    menuItems: MenuItem[]
}

const priceFormat = new Intl.NumberFormat('de-AT', { style: 'currency', currency: 'EUR' });

export const MenuTable: React.FC<IMenuTableProps> = (props: IMenuTableProps) => {

  const [itemCount, setItemCount] = useState(props.menuItems.map(() => 0) as number[]);

  const copyAddItemCount = (itemCount: number[], idx: number, amount: number) => {
    const copy = [...itemCount];
    copy[idx] = Math.max(itemCount[idx] + amount, 0);
    return copy;
  };

  return (
    <Table size={"small"}>
      <TableHead>
        <TableRow>
          <TableCell>Speise</TableCell>
          <TableCell>Preis</TableCell>
          <TableCell>Anzahl</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.menuItems.map((menuItem, idx) => (
          <TableRow key={idx}>
            <TableCell>{menuItem.name}</TableCell>
            <TableCell>{priceFormat.format(menuItem.price)}</TableCell>
            <TableCell>
              <IconButton onClick={() => setItemCount(copyAddItemCount(itemCount, idx, -1))}>
                <Remove />
              </IconButton>
              {itemCount[idx]}
              <IconButton onClick={() => setItemCount(copyAddItemCount(itemCount, idx, 1))}>
                <Add />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>
            Summe
          </TableCell>
          <TableCell colSpan={2}>
            {priceFormat.format(itemCount.map((count, idx) => props.menuItems[idx].price * count).reduce((previousValue, currentValue) => previousValue + currentValue, 0))}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
};
