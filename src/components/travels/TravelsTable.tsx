import {Component, ReactNode} from "react";
import {Card, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import { TravelsTableItem } from "./TravelsTableItem";

interface IProps {

}

interface IState {

}

export class TravelsTable extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);


    }

    render(): ReactNode {
        return <div className={"h-full"}>
            <Table hideHeader aria-label="Travels collection table" className="h-full border-none" removeWrapper>
                <TableHeader>
                    <TableColumn>1</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key={"1"}>
                        <TableCell>
                            <TravelsTableItem/>
                        </TableCell>
                    </TableRow>
                    <TableRow key={"2"}>
                        <TableCell>
                        <TravelsTableItem/>
                        </TableCell>
                    </TableRow>
                    <TableRow key={"3"}>
                        <TableCell>
                            <TravelsTableItem/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    }
}