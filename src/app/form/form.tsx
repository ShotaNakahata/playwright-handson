"use client";
import React, { useCallback, useRef, useState } from "react";

const ShuffleMemberForm = () => {
	const [result, setResult] = useState([] as string[]);

	const firstRef = useRef<HTMLInputElement>(null);
	const secondRef = useRef<HTMLInputElement>(null);
	const thirdRef = useRef<HTMLInputElement>(null);

	const callApi = useCallback(async () => {
		const members = [] as string[];
		const refs = [firstRef, secondRef, thirdRef];
		for (const ref of refs) {
			if (ref.current?.value) {
				members.push(ref.current?.value);
			}
		}
		const res = await fetch("/api/shuffle", {
			method: "post",
			body: JSON.stringify({ members }),
		});
		if (res.ok) {
			const result = (await res.json()) as { members: string[] };
			setResult(result.members);
		}
	}, []);
	return (
		<>
			<label htmlFor="first">1 人目:</label>
			<input
				type="text"
				ref={firstRef}
				id="first"
				name="first"
				placeholder="1 人目の名前を入力"
			/>
			<br />
			<label htmlFor="second">2 人目:</label>
			<input
				type="text"
				ref={secondRef}
				id="second"
				name="second"
				placeholder="2 人目の名前を入力"
			/>
			<br />

			<label htmlFor="third">3 人目:</label>
			<input
				type="text"
				ref={thirdRef}
				id="third"
				name="third"
				placeholder="3 人目の名前を入力"
			/>
			<br />
			<button type="button" onClick={callApi}>
				シャッフル
			</button>

			<label htmlFor="result">結果</label>
			<br />
			<output id="result">{result.join("→")}</output>
		</>
	);
};

export default ShuffleMemberForm;
