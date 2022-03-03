import { useState } from 'react';

import Category from '../Category';
import Tag from '../Tag';

import { HTTP_METHOD, FORUM_URL, LOCAL_STORAGE } from '../../../config';

const PostForm = (props) => {
    const { posts, setPosts } = props;

    const initialPost = {
        title: '',
        content: '',
    };

    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newPost, setNewPost] = useState(initialPost);

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setNewPost({ ...newPost, [name]: value });

        if (
            name === 'Gaming' ||
            name === 'Fan-Fiction' ||
            name === 'Cosplay' ||
            name === 'Manga' ||
            name === 'Tv/Film'
        ) {
            setCategories([...categories, name]);
        }
    };

    const submitNewPostHandler = (event) => {
        event.preventDefault();

        const newPost = {
            title: newPost.title,
            content: newPost.content,
            categories: categories,
            tags: tags,
            userId: Number(localStorage.getItem(LOCAL_STORAGE.USER_ID)),
        };

        fetchNewPost(newPost);
    };

    const fetchNewPost = async (newPost) => {
        const response = await fetch(FORUM_URL.POST, {
            method: `${HTTP_METHOD.POST}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem(LOCAL_STORAGE.TOKEN),
            },
            body: JSON.stringify(newPost),
        });

        const data = await response.json();

        setPosts([...posts, data.data]);
    };

    return (
        <form className="create-post-form" onSubmit={submitNewPostHandler}>
            <input
                type="text"
                placeholder="Title"
                name="title"
                value={newPost.title}
                onChange={changeHandler}
            />
            <textarea
                placeholder="Text"
                name="content"
                className="post-form-textarea"
                value={newPost.content}
                onChange={changeHandler}
            ></textarea>

            <Category changeHandler={changeHandler} />

            <Tag tags={tags} setTags={setTags} />

            <div className="group-post-btn">
                <button type="button" className="save-post-btn">
                    Save
                </button>
                <button type="submit" className="submit-post-btn">
                    Post
                </button>
            </div>
        </form>
    );
};

export default PostForm;
