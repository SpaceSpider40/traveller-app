import {Component, ReactNode} from "react";
import {Card, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

interface IProps {

}

interface IState {

}

export class TravelsTable extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);


    }

    render(): ReactNode {
        return <Card className={"h-full p-2"}>
            <Table hideHeader aria-label="Travels collection table" className="h-full" removeWrapper>
                <TableHeader>
                    <TableColumn>1</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key={"1"}>
                        <TableCell>
                            Opis jakiegoś wyjazdu
                        </TableCell>
                    </TableRow>
                    <TableRow key={"2"}>
                        <TableCell>
                            Opis jakiegoś wyjazdu
                        </TableCell>
                    </TableRow>
                    <TableRow key={"3"}>
                        <TableCell>
                            Opis jakiegoś wyjazdu
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    }
}