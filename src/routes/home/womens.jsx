import React from "react";
import { Template, TemplateHeader } from "../../components/separateSiteTemplate/cloth.template.jsx";
import { womenClothes, categories } from "../../components/separateSiteTemplate/clothesData.js";

function WomenPage() {
    const womensCategory = categories[3]

    return (
        <div>
            <TemplateHeader 
                key={womensCategory.id}
                name={womensCategory.name}
                img={womensCategory.img}
            />

            {womenClothes.map((item) => (
                <Template
                    key={item.id}
                    name={item.name}
                    isHeader={item.isHeader}
                    img1={item.img1}
                    img2={item.img2}
                    zoom={item.zoom}
                />
            ))}
        </div>
    );
}

export default WomenPage;