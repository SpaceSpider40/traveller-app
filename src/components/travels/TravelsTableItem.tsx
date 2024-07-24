import { Card, Skeleton, Image, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Component, ReactNode } from "react";

interface IProps {

}

interface IState {

}

export class TravelsTableItem extends Component<IProps, IState> {
    render(): ReactNode {
        return (
            <>
                <Card className="p-3 grid md:grid-cols-12 gap-4">
                    <div className="col-span-2 flex-row">
                        <Skeleton className="rounded-lg w-full" isLoaded={false}>
                            <Image
                                className="w-fit"
                                alt="thumbnail"
                                src="https://placehold.co/800"

                            />
                        </Skeleton>
                    </div>
                    <div className="flex-row md:col-span-10">
                        <Skeleton className="rounded-lg mb-2 " isLoaded={false}>
                            <p className="text-2xl text-center mb-2">
                                [TITLE]
                            </p>
                        </Skeleton>
                        <Skeleton className="rounded-lg flex-1" isLoaded={true}>
                            <div className="flex flex-1">

                                <Card>
                                    <CardHeader>
                                        Attedees
                                    </CardHeader>
                                    <CardBody>
                                        -1
                                        -2
                                    </CardBody>
                                    <CardFooter>
                                        <Button>Add</Button>
                                    </CardFooter>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        Attedees
                                    </CardHeader>
                                    <CardBody>
                                        -1
                                        -2
                                    </CardBody>
                                    <CardFooter>
                                        <Button>Add</Button>
                                    </CardFooter>
                                </Card>

                            </div>
                        </Skeleton>
                    </div>
                </Card>
            </>
        );
    }
}