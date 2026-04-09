import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContextProvider'

export default function Text() {
let {value} =useContext(themeContext)

 return (
    <div>
        
        <p style={{
            
            backgroundColor : value ? "black" :"white",
            color: value ? "white" :"black"

        }}  >Wikis are powered by wiki software, also known as wiki engines. Being a form of content management system, these differ from other web-based systems such as blog software or static site generators in that the content is created without any defined owner or leader. Wikis have little inherent structure, allowing one to emerge according to the needs of the users.[5] Wiki engines usually allow content to be written using a lightweight markup language and sometimes edited with the help of a rich-text editor.[6] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems. Some wiki engines are free and open-source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material. Others may permit access without enforcing access control. Further rules may be imposed to organize content. In addition to hosting user-authored content, wikis allow those users to interact, hold discussions, and collaborate.[7]

There are hundreds of thousands of wikis in use, both public and private, including wikis functioning as knowledge management resources, note-taking tools, community websites, and intranets. Ward Cunningham, the developer of the first wiki software, WikiWikiWeb, originally described wiki as "the simplest online database that could possibly work".[8]

The online encyclopedia project Wikipedia is the most popular wiki-based website, as well being one of the internet's most popular websites, having been ranked consistently as such since at least 2007.[9] Wikipedia is not a single wiki but rather a collection of hundreds of wikis, with each one pertaining to a specific language, making it the largest reference work of all time.[10] The English-language Wikipedia has the largest collection of articles, standing at 7,165,541 as of April 2026.[11]</p>



    </div>
  )
}
