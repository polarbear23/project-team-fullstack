const Category = (props) => {
	const { changeHandler } = props;

	return (
		<>
			<div>
				<label htmlFor="Gaming">Gaming</label>
				<input
					type="checkbox"
					id="Gaming"
					name="Gaming"
					onChange={changeHandler}
				/>
			</div>
			<div>
				<label htmlFor="Fan-Fiction">Fan-Fiction</label>
				<input
					type="checkbox"
					id="Fan-Fiction"
					name="Fan-Fiction"
					onChange={changeHandler}
				/>
			</div>
			<div>
				<label htmlFor="Cosplay">Cosplay</label>
				<input
					type="checkbox"
					id="Cosplay"
					name="Cosplay"
					onChange={changeHandler}
				/>
			</div>
			<div>
				<label htmlFor="Manga">Manga</label>
				<input
					type="checkbox"
					id="Manga"
					name="Manga"
					onChange={changeHandler}
				/>
			</div>
			<div>
				<label htmlFor="Tv/Film">Tv/Film</label>
				<input
					type="checkbox"
					id="Tv/Film"
					name="Tv/Film"
					onChange={changeHandler}
				/>
			</div>
		</>
	);
};

export default Category;
