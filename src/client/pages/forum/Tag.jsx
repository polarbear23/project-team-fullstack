import { useState } from 'react';

const Tag = (props) => {
    const { tags, setTags } = props;

    const [tag, setTag] = useState([]);

    const addTagHandler = (event) => {
        event.preventDefault();

        setTags([...tags, tag]);

        setTag('');
    };

    return (
        <>
            <div className="tag-container">
                <input
                    type="text"
                    id="tag"
                    placeholder="Tag"
                    value={tag}
                    onChange={(event) => setTag(event.target.value)}
                />
                <button onClick={addTagHandler}>Add</button>
            </div>

            <ul className="tag-list">
                {tags.map((tag, index) => {
                    return <li key={index}>#{tag}</li>;
                })}
            </ul>
        </>
    );
};

export default Tag;
