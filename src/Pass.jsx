import PlaneIcon from "./assets/airplane.svg";
import BarCode from "./assets/Code-128.png";

function App() {
    return (
        <>
            <div className=" border-2 border-Default-green bg-Default-green flex-col mt-5 p-6 rounded-2xl">
                <div className="border-b-4 border-dashed pb-4 relative">
                    <div className="mb-2">
                        <h1 className="text-white text-sm font-medium opacity-90">
                            BOARDING PASS
                        </h1>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <p className="text-[0.65rem] font-medium text-gray-100 opacity-60">
                                    FROM
                                </p>
                                <h1 className="text-2xl text-white font-medium ">
                                    ETH
                                </h1>
                                <p className="text-[0.75rem] font-normal text-gray-100">
                                    ETHIOPIA
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex-col ">
                                <img
                                    className="w-30"
                                    src={PlaneIcon}
                                    alt="airplane icon"
                                />
                                <p className="text-[0.75rem] font-medium text-gray-100 opacity-60">
                                    ~ 4Hr 30 MIN
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="text-[0.65rem] font-medium text-gray-100 opacity-60">
                                    TOP
                                </p>
                                <h1 className="text-2xl text-white font-medium ">
                                    MIA
                                </h1>
                                <p className="text-[0.75rem] font-normal text-gray-100">
                                    MIAMI
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                        <div className="flex gap-5 flex-1">
                            <div>
                                <p className="text-[0.65rem] font-medium text-gray-100 opacity-50">
                                    Gate
                                </p>
                                <h1 className="text-lg text-white font-medium ">
                                    12
                                </h1>
                            </div>
                            <div>
                                <p className="text-[0.65rem] font-medium text-gray-100 opacity-50">
                                    Terminal
                                </p>
                                <h1 className="text-lg text-white font-medium ">
                                    02
                                </h1>
                            </div>
                        </div>
                        <div className="flex gap-5 flex-1 justify-end">
                            <div>
                                <p className="text-[0.65rem] font-medium text-gray-100 opacity-50">
                                    Gate
                                </p>
                                <h1 className="text-lg text-white font-medium ">
                                    12
                                </h1>
                            </div>
                            <div>
                                <p className="text-[0.65rem] font-medium text-gray-100 opacity-50">
                                    Terminal
                                </p>
                                <h1 className="text-lg text-white font-medium ">
                                    02
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Accent circles */}
                    <div>
                        <div className="bg-white rounded-full w-10 h-10 absolute -bottom-5 -left-12"></div>
                    </div>
                    <div>
                        <div className="bg-white rounded-full w-10 h-10 absolute -bottom-5 -right-12"></div>
                    </div>
                </div>

                <div className="mt-10 flex-col flex gap-4">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-sm font-normal text-gray-100 opacity-50">
                                PASSENGER
                            </p>
                            <h1 className="text-md text-white font-medium ">
                                YONATAN AFEWERK
                            </h1>
                        </div>
                        <div>
                            <p className="text-sm text-end font-medium text-gray-100 opacity-50">
                                SEAT
                            </p>
                            <h1 className="text-md text-white font-medium ">
                                34A
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-sm font-normal text-gray-100 opacity-50">
                                FLIGHT
                            </p>
                            <h1 className="text-md text-white font-medium ">
                                34A4
                            </h1>
                        </div>
                        <div>
                            <p className="text-sm text-end font-medium text-gray-100 opacity-50">
                                DEPART
                            </p>
                            <h1 className="text-md text-white font-medium ">
                                3 OCT, 21 7:30 PM
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div>
                            <p className="text-sm font-normal text-gray-100 opacity-50">
                                PURCHASED
                            </p>
                            <h1 className="text-md text-white font-medium ">
                                20/11/23
                            </h1>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-end text-gray-100 opacity-50">
                                EXPIRES
                            </p>
                            <h1 className="text-md text-white font-medium ">
                                28/11/23
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[14rem]">
                            <img src={BarCode} alt="The barcode for the pass" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
