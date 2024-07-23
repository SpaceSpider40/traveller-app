import {Component, ReactNode} from "react";
import {MainNavbar} from "../../components/MainNavbar.tsx";
import {TravelsTable} from "../../components/travels/TravelsTable.tsx";

interface IProps {

}

interface IState {

}

export class Travels extends Component<IProps, IState> {
    render(): ReactNode {
        return <div className={"h-screen flex flex-col"}>
            <MainNavbar/>
            <div className={"p-2 flex-1"}>
                <TravelsTable/>
            </div>
        </div>
    }
}