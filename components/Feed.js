import { SparklesIcon } from "@heroicons/react/solid"
import Input from "./INput"


const Feed = () => {
    // flex grow makes the feed the biggest element on window . its the same as flex-1
    // can also add flex-[0.3] to the widgets and sidebar and then have the
    // feed be flex-[0.6]

    // when using position sticky/fixed, we have to define a height that will serve
    // like an anchor
    return (
        <div className="text-white flex-grow border-l border-r
        border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className="text-[#d9d9d9] flex items-center
            sm:justify-between py-2 px-3 sticky top-o z-50 
            bg-black border-b border-gray-700 "> 
            <h2 className="text-lg sm:text-xl font-bold">Home </h2>
                <div className="hoverAnimation w-9 h-9 flex items-center
                justify-center xl:px-0 ml-auto">
                    <SparklesIcon className="h-5 text-white" />
                </div>
            </div>

            <Input/>

        </div>
    )
}

export default Feed
