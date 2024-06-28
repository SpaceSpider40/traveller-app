import {Component, ReactNode} from "react";
import {
    Avatar,
    Dropdown, DropdownItem,
    DropdownMenu,
    DropdownTrigger, Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";

interface IProps{

}

interface IState{

}

export class MainNavbar extends Component<IProps, IState>{

    render():ReactNode {
        return <Navbar isBlurred isBordered maxWidth='full'>
            <NavbarBrand>
                <p className="font-bold text-inherit">Traveller</p>
            </NavbarBrand>
            <NavbarContent justify={"center"}>
                <NavbarItem isActive>
                    <Link color={"foreground"} href={"#"}>
                        Desktop
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color={"foreground"} href={"#"}>
                        Travels
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color={"foreground"} href={"#"}>
                        Resources
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify={"end"}>
                <Dropdown placement={"bottom-end"}>
                    <DropdownTrigger>
                        <Avatar/>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem>
                            <p>Signed in as test</p>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    }
}