import Header from "./header";
import Main from "./main";
import Section from "./section";
import { useState } from "react";
function App() {
  const [Value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  async function searchImg() {
    const url =
      "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "3c68bf92aemshe67110d6e3c645ap1bbb1ajsn0b8883d7964b",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return await result.value;
      // result.value[0].provider.name 이름
      // result.value[0].url 이미지
    } catch (error) {
      console.error(error);
    }
  }

  const saveValue = (event) => {
    setValue(event.target.value);
  };
  const onClickBtn = async () => {
    const searchUrl = await searchImg();
    setUrl(searchUrl);
    setSearch(Value);
  };
  return (
    <>
      <Header />
      <Main onClick={onClickBtn} value={Value} onChange={saveValue} />
      <Section search={search} url={url} />
    </>
  );
}

export default App;
