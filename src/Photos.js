import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            {props.photos.map(function (photo, index) {
              return (
                <section key={index}>
                  {index === 0 ? (
                    <div class="carousel-item active">
                      <img
                        class="d-block w-100"
                        src={photo.src.landscape}
                        alt="First slide"
                      />
                    </div>
                  ) : (
                    <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        src={photo.src.landscape}
                        alt="Second slide"
                      />
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
