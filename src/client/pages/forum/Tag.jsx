import {useState} from 'react';


const Tag = () => {
    const [tag, setTag] = useState([]);
    const [tags, setTags] = useState([]);
    
    const addTagHandler = (e) => {
        e.preventDefault();
        setTags([...tags, tag]);
        setTag('');
    }

	return (
		<>
			<div className="tag-container">
				<input 
                    type="text" 
                    id="tag" 
                    placeholder="Tag" 
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
				<button onClick={addTagHandler}>Add</button>
			</div>

            <ul className="tag-list">
                {tags.map((tag,index) => {
                    return <li key={index}>#{tag}</li>
                })}
			</ul>
			
		</>
	);
};

export default Tag