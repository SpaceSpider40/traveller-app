import { Card, Skeleton, Image } from "@nextui-org/react";
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
                        <Skeleton className="rounded-lg w-full" isLoaded={true}>
                            <Image 
                            className="w-fit"
                            alt="thumbnail" 
                            src="https://placehold.co/800" 
                            
                            />
                        </Skeleton>

                        <Skeleton className="rounded-lg" isLoaded={true}>
                                <p className="text-2xl text-center">
                                    [TITLE]
                                </p>
                            </Skeleton>
                    </div>
                    <div className="flex-row md:col-span-10">
                    </div>
                </Card>
            </>
        );
    }
}