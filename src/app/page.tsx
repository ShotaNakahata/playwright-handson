import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "最初のページ",
	description: "Playwright ハンズオンの最初のステップ",
};
export default function HOME() {
	return (
		<main>
			<h1>Playwright のハンズオン</h1>
			<p>あなたは 1週間後には E2E テストのエキスパートです。</p>
			<p>
				<button type="button">操作ボタン</button>
			</p>
		</main>
	);
}
