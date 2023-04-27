import './styles.css';

function Section() {
    return (
        <section>
            <ul>
                <li><div className="section-result">검색결과</div></li>
                <li><div className="section-line"></div></li>
                <li><img className="section-img1" src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/cEmV/image/waD2sHkLtNV__uKphcoyhj3f_OE.jpg" alt="사진1"/></li>
                <li><img className="section-img2" src="https://www.hynews.ac.kr/news/photo/202009/10519_8579_1515.jpg" alt="img2"/></li>
                <li><img className="section-img3" src="https://static.newswire.co.kr/property/img/sub/edu_pressWrite_photographing_img.jpg" alt="img3"/></li>
                <li><div className="section-line"></div></li>
            </ul>
        </section>
    );
}

export default Section;
