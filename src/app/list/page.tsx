import React from "react";

const List = () => {
	return (
		<ul>
			<li>
				和食
				<ul>
					<li>
						<a href="/sushi">寿司</a>
					</li>
					<li>
						<a href="/japanese-noodle">麺</a>
					</li>
				</ul>
			</li>
			<li>
				中華
				<ul>
					<li>
						<a href="/fried-rice">炒飯</a>
					</li>
					<li>
						<a href="/chinese-noodle">麺</a>
					</li>
				</ul>
			</li>
		</ul>
	);
};

export default List;
