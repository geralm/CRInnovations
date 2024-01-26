"use client";
import { Avatar } from "@mui/material";
import DownloadButton from "./DownloadButton";
function Header({ image, name, lastname }) {
    return (
        <div className="col-span-2 flex flex-row bg-[#C9D6E8] justify-evenly">
            <div className="justify-self-start bg-orange-500">
                <Avatar
                    className=""
                    alt={name}
                    src={image}
                    sx={{ width: 200, height: 200 }}
                />
            </div>
            <DownloadButton />

            <div className="justify-self-auto bg-cyan-950">
                <h1>{name + " " + lastname}</h1>
            </div>
        </div>
    );
}
export default Header;
