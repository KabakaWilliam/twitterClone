import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const Input = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const filePickerRef = useRef(null);

  const addImageToPost = () => {};

  const inputTextHandler = (e) => {
    setInput(e.target.value);
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((element) => codesArray.push("0x" + element));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3
        overflow-y-scroll`}
    >
      {/* profile Icon */}
      <img
        src="https://www.drupal.org/files/project-images/u-7.png"
        width="50"
        alt=""
        className="h-10 w-10 rounded-full cursor-pointer "
      />

      {/* input */}
      <div className="w-full divide-y divide-gray-700">
        <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
          <textarea
            value={input}
            onChange={inputTextHandler}
            rows="2"
            placeholder="What's popping?"
            className="bg-transparent outline-none 
                    text-[#d9d9d9] text-lg placeholder-gray-500
                    tracking-wide w-full min-h-[50px]"
          />

          {/* Uploaded media area */}
          {/* same as if (selectedFile===true){...} 
                        Will only run when we have a file
                    */}
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c]
                                            hover:bg-[#272c26] bg-opacity-75 rounded-full
                                            flex items-center justify-center top-1 left-1 
                                            cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        {/* icon field */}
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            {/* user clicks on the icon, and event refrenced from input */}
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#1d9df0]" />
              <input
                type="file"
                onChange={addImageToPost}
                ref={filePickerRef}
                hidden
              />
            </div>

            <div className="icon rotate-90">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div
              className="icon rotate-90"
              onClick={() => setShowEmojis(!showEmojis)}
            >
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon ">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            {showEmojis && (
              <Picker
                onSelect={addEmoji}
                style={{
                  position: "absolute",
                  marginTop: "465px",
                  marginLeft: -40,
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
              />
            )}
          </div>

          <button
            className="bg-[#1d9bf0] text-white rounded-full
           px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] 
           disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
            disabled={!input.trim() && !selectedFile}
            // onClick = {sendPost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
