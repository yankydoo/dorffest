import * as React from "react";
import {MenuItem} from "./entity/MenuItem";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import {useState} from "react";
import {AddCircleOutline, RemoveCircleOutline} from "@material-ui/icons";

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
            <TableCell>
              <Typography variant={"caption"} color={"textSecondary"}>
                {priceFormat.format(menuItem.price)}
              </Typography>
              <br />
              {priceFormat.format(menuItem.price * itemCount[idx])}
            </TableCell>
            <TableCell>
              <Typography variant={"h6"} color={"textPrimary"} noWrap={true}>
                <IconButton onClick={() => setItemCount(copyAddItemCount(itemCount, idx, -1))} color={"primary"}>
                  <RemoveCircleOutline />
                </IconButton>
                  {itemCount[idx]}
                <IconButton onClick={() => setItemCount(copyAddItemCount(itemCount, idx, 1))} color={"primary"}>
                  <AddCircleOutline />
                </IconButton>
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>
            Summe
          </TableCell>
          <TableCell>
            <Typography variant={"h6"} color={"textPrimary"}>
              {priceFormat.format(itemCount.map((count, idx) => props.menuItems[idx].price * count).reduce((previousValue, currentValue) => previousValue + currentValue, 0))}
            </Typography>
          </TableCell>
          <TableCell>
            <Button variant={"outlined"} onClick={() => setItemCount(props.menuItems.map(() => 0))} color={"primary"}>
              Reset
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
};
