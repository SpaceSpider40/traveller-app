import {Component} from "react";
import {Button, Input, Image} from "@nextui-org/react";

import google_logo from "../../assets/img/google_logo.png";

export default class Login extends Component {
    render() {
        return <div className="grid grid-cols-1 md:grid-cols-3 h-screen bg-no-repeat bg-fixed bg-cover bg-[url('/src/assets/img/winter_mountains.jpg')] ">
            <div className="min-h-full md:col-span-2">
                <div className="min-h-full justify-center content-center">
                </div>
            </div>

            <div className="min-h-full justify-center content-center bg-blue-700/30 backdrop-blur-md">
                <div className={" p-10"}>
                    <p className={"text-7xl mx-2 my-10"}>Traveller</p>

                    <Input className="m-2" label="Login" variant="bordered" type={"text"}/>
                    <Input className="m-2" label="Password" variant="bordered" type={"password"}/>

                    <Button className="mx-2 my-1 w-full" variant="shadow">Login</Button>
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <Button className="mx-2 my-1 w-full h-fit" isIconOnly  variant='shadow'>
                            <Image loading='lazy' isBlurred src={google_logo} sizes={'contain'}/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    }
}