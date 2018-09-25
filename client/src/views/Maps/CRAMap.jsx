import * as React from "react";

function CRAMap({ ...props }) {
  return (
    <div className="embed-container">
      <iframe
        width="1276"
        height="706"
        frameborder="0"
        scrolling="yes"
        marginHeight="0"
        marginWidth="0"
        title="Civitas"
        src="//mirta-carter.maps.arcgis.com/apps/Embed/index.html?webmap=7a33c95b13fb413e8bfa8ce5eb43f837&extent=-82.1924,28.0671,-80.5746,28.8134&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
      />
    </div>
  );
}

export default CRAMap;
