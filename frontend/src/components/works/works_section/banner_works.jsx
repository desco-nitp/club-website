import React from "react";
import Banner from "./banner";

const Imageinfo = [
    { //Brand Images url to be added
        key: 1,
        imgUrl1: "",
        imgUrl2: "",
        imgUrl3: "",
        imgUrl4: "",
        imgUrl5: "",
    },
    { //Digital art Images url to be added
        key: 2,
        imgUrl1: "",
        imgUrl2: "",
        imgUrl3: "",
        imgUrl4: "",
        imgUrl5: "",
    },
    { //3D Design Images url to be added
        key: 3,
        imgUrl1: "",
        imgUrl2: "",
        imgUrl3: "",
        imgUrl4: "",
        imgUrl5: "",
    },
    { //UI design Images url to be added
        key: 4,
        imgUrl1: "",
        imgUrl2: "",
        imgUrl3: "",
        imgUrl4: "",
        imgUrl5: "",
    },
    { //Typography Images url to be added
        key: 5,
        imgUrl1: "",
        imgUrl2: "",
        imgUrl3: "",
        imgUrl4: "",
        imgUrl5: "",
    },
];

const bannerinfo = [
    {
        key: 1,
        title: "BRAND",
        detail: "PROJECTS"
    },
    {
        key: 2,
        title: "DIGITAL ART",
        detail: "SEE ALL"
    },
    {
        key: 3,
        title: "3D DESIGNS",
        detail: "SEE ALL"
    },
    {
        key: 4,
        title: "UI DESIGNS",
        detail: "SEE ALL"
    },
    {
        key: 5,
        title: "TYPOGRAPHY",
        detail: "SEE ALL"
    },
];

function Works() {
    return (
        <div>
            {bannerinfo.map((banner, index) => (
                <Banner
                    key={banner.key}
                    title={banner.title}
                    detail={banner.detail}
                    images={Imageinfo[index]}
                />
            ))}
        </div>
    );
}

export default Works;
