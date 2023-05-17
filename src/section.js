import "./styles.css";
import NoImg from "./NoImg.jpg";
function Section({ search, url }) {
  const urls = url;
  console.log(urls);
  const onErrorImg = (e) => {
    e.target.src = NoImg;
  };
  return (
    <section>
      <ul>
        <li>
          <div className="section-result">
            {search ? `"${search}"` : ""} 검색결과
          </div>
        </li>
        <li>
          <div className="section-line"></div>
        </li>
        {urls &&
          search &&
          urls.map(({ url, width, height }, i) => {
            try {
              return (
                <li>
                  <img
                    className={`section-img`}
                    src={url}
                    width={`${width}px`}
                    height={`${height}px`}
                    onError={onErrorImg}
                  />
                </li>
              );
            } catch (e) {
              console.log("이미지 없음");
            }
          })}
        <li>
          <div className="section-line"></div>
        </li>
      </ul>
    </section>
  );
}

export default Section;
