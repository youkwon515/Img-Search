import './styles.css';
import searchIcon from './searchIcon.svg';

function clickE() {
    let inputValue = document.querySelector("input").value;
    console.log(inputValue);
}

function Main() {
    return (
        <main>
            <span>TITLE</span>
            <div>
                <img src={searchIcon} alt="검색아이콘"/>
                <input type="text"/>
            </div>
            <button onClick={clickE}>검색하기</button>
        </main>
    );
}




// async function search() {
//     const url = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true';
//     const options = {
//         method: 'GET',
//         headers: {
//             'content-type': 'application/octet-stream',
//             'X-RapidAPI-Key': '3c68bf92aemshe67110d6e3c645ap1bbb1ajsn0b8883d7964b',
//             'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
//         }
//     };
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result.value[0].provider.name);
//         // result.value[0].provider.name 이름
//         // result.value[0].url 이미지
//     } catch (error) {
//         console.error(error);
//     }
// }

// search();

export default Main;