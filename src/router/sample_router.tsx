import { Counter } from "../page/menu/counter";
import { Menu } from "../page/menu/menu";
import SList from "../page/sample/s-list";
import STable from "../page/sample/s-table";

export const sampleRouter = [
  {
    path: "menu",
    element: <Menu />,
  }, {
    path: "table/:tableId",
    element: <STable />,
  }, {
    path: "list",
    element: <SList />
  }, {
    path: "counter",
    element: <Counter />
  }
]